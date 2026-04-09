import styles from './NewAnimation.module.css';
import React, { useRef, useState, useEffect, useCallback } from 'react';

const imagePaths = [
  '/newanimation/image 1.png',
  '/newanimation/image 2.png',
  '/newanimation/image 3.png',
  '/newanimation/image 4.png',
  '/newanimation/image 5.png',
  '/newanimation/image 6.png',
  '/newanimation/image 7.png'
];

const imageTravelDistances = [135, 120, 145, 130, 140, 125, 150];
const imageFinalOffsets = [34, 32, 30, 32, 30, 32, 34];
const mobileFinalOffsets = [12, 10, 8, 8, 8, 10, 12];
const mobileTravelBoost = [28, 24, 30, 26, 30, 24, 28];
const mobileProgressOffset = 0.14;

function NewAnimation() {
  const newAnimationRef = useRef(null);
  const lastMobileProgressRef = useRef(mobileProgressOffset);
  const [imageTranslates, setImageTranslates] = useState(Array(8).fill(100));
  const [isTextLoaded, setIsTextLoaded] = useState(false);
  const isSafariRef = useRef(false);
  const rafIdRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const targetTranslatesRef = useRef(Array(8).fill(100));
  const currentTranslatesRef = useRef(Array(8).fill(100));

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    isSafariRef.current = /^((?!chrome|android).)*safari/i.test(ua) && !ua.includes('chrome');
  }, []);

  useEffect(() => {
    let frameId = 0;

    frameId = window.requestAnimationFrame(() => {
      setIsTextLoaded(true);
    });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  const calculateTargets = useCallback(() => {
    const isMobileViewport = window.innerWidth <= 768;
    const isSafari = isSafariRef.current;
    const newAnimationRect = newAnimationRef.current?.getBoundingClientRect();
    if (!newAnimationRect) return;

    const scrollY = window.scrollY;
    const isScrollingDown = scrollY >= lastScrollYRef.current;
    const newAnimationTop = newAnimationRect.top + scrollY;
    const newAnimationHeight = newAnimationRect.height;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = Math.max(newAnimationHeight - viewportHeight, 1);
    
    const desktopSectionProgress = (scrollY - newAnimationTop + viewportHeight * 0.2) / scrollableDistance;
    const mobileSectionProgress = Math.max(0, (scrollY - newAnimationTop) / scrollableDistance);
    
    const rawProgress = isMobileViewport
      ? mobileSectionProgress + mobileProgressOffset
      : desktopSectionProgress;
    const normalizedProgress = Math.max(0, Math.min(1, rawProgress));
    
    const clampValue = isSafari ? 0.15 : 0.08;
    const scrollProgress = isMobileViewport
      ? (
        isScrollingDown
          ? Math.max(normalizedProgress, lastMobileProgressRef.current - clampValue)
          : normalizedProgress
      )
      : normalizedProgress;

    if (isMobileViewport) {
      lastMobileProgressRef.current = scrollProgress;
    } else {
      lastMobileProgressRef.current = mobileProgressOffset;
    }
    lastScrollYRef.current = scrollY;
    
    const newTargets = Array.from({ length: 8 }, (_, index) => {
      const isTextImage = index === 7;
      let startOffset = isTextImage ? 0.1 : 0.16;
      let animationRange = isTextImage ? 0.72 : 0.64;

      if (isMobileViewport && !isTextImage) {
        startOffset = 0.14;
        animationRange = 0.78;
      }

      if (isMobileViewport && isTextImage) {
        startOffset = 0.08;
        animationRange = 0.82;
      }

      let progress = (scrollProgress - startOffset) / animationRange;
      progress = Math.max(0, Math.min(1, progress));

      // LINEAR for Safari (no easing calculation)
      const easedProgress = isSafari
        ? progress
        : (isTextImage ? (1 - Math.pow(1 - progress, 2.4)) : (1 - Math.pow(1 - progress, 2.8)));

      const currentTravelDistance = isTextImage
        ? (isMobileViewport ? 150 : 140)
        : imageTravelDistances[index] + (isMobileViewport ? mobileTravelBoost[index] : 0);
      
      const currentFinalOffset = isTextImage
        ? 0
        : (isMobileViewport ? mobileFinalOffsets[index] : imageFinalOffsets[index]);

      const entryTarget = isTextImage
        ? currentTravelDistance * (1 - easedProgress)
        : currentFinalOffset + ((currentTravelDistance - currentFinalOffset) * (1 - easedProgress));

      const exitStart = Math.min(
        startOffset + (animationRange * (isTextImage ? 0.52 : 0.6)),
        0.82
      );
      const exitRange = isTextImage
        ? (isMobileViewport ? 0.34 : 0.28)
        : (isMobileViewport ? 0.3 : 0.24);
      const exitProgress = Math.max(
        0,
        Math.min(1, (scrollProgress - exitStart) / exitRange)
      );
      const exitDistance = isTextImage
        ? (isMobileViewport ? 240 : 420)
        : (isMobileViewport ? 120 : 210);

      return entryTarget - (exitDistance * exitProgress);
    });

    targetTranslatesRef.current = newTargets;
  }, []);

  const interpolate = useCallback(() => {
    const isSafari = isSafariRef.current;
    const lerpFactor = isSafari ? 0.11 : 0.035;
    
    let hasChanged = false;
    const newTranslates = currentTranslatesRef.current.map((current, i) => {
      const target = targetTranslatesRef.current[i];
      const diff = target - current;
      
      if (Math.abs(diff) < 0.1) return target;
      
      hasChanged = true;
      return current + diff * lerpFactor;
    });

    if (hasChanged) {
      currentTranslatesRef.current = newTranslates;
      setImageTranslates([...newTranslates]);
      rafIdRef.current = requestAnimationFrame(interpolate);
    } else {
      rafIdRef.current = null;
    }
  }, []);

  const handleScroll = useCallback(() => {
    const now = performance.now();
    const isSafari = isSafariRef.current;
    const throttleMs = isSafari ? 24 : 14;
    
    if (now - lastScrollTimeRef.current < throttleMs) return;
    lastScrollTimeRef.current = now;

    calculateTargets();
    
    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(interpolate);
    }
  }, [calculateTargets, interpolate]);

  useEffect(() => {
    const options = isSafariRef.current 
      ? { passive: true, capture: true }
      : { passive: true };
    
    window.addEventListener('scroll', handleScroll, options);
    window.addEventListener('resize', calculateTargets, { passive: true });
    
    calculateTargets();
    setImageTranslates([...targetTranslatesRef.current]);
    currentTranslatesRef.current = [...targetTranslatesRef.current];
    lastScrollYRef.current = window.scrollY;

    return () => {
      window.removeEventListener('scroll', handleScroll, options);
      window.removeEventListener('resize', calculateTargets);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [handleScroll, calculateTargets]);

  const getImageStyle = (index) => ({
    transform: `translateY(${imageTranslates[index]}%)`,
    WebkitTransform: `translateY(${imageTranslates[index]}%) translate3d(0,0,0)`,
    willChange: 'transform',
  });

  const getTextStyle = () => ({
    transform: `translateX(-50%) translateY(${imageTranslates[7]}px)`,
    WebkitTransform: `translateX(-50%) translateY(${imageTranslates[7]}px) translate3d(0,0,0)`,
    willChange: 'transform',
  });

  return (
    <section ref={newAnimationRef} className={styles.newAnimation}>
      <div className={styles.newAnimationStage}>
        <div className={styles.newAnimationBg}>
          <div className={styles.newAnimationImage} />
          
          <div
            className={`${styles.textImageWrap} ${isTextLoaded ? styles.textImageLoaded : ''}`}
          >
            <img 
              src="/newanimation/text.png"
              alt="Text Overlay"
              className={styles.textImage}
              style={getTextStyle()}
            />
          </div>
          
          {Array.from({ length: 7 }, (_, index) => (
            <img
              key={index}
              src={imagePaths[index]}
              alt={`New Animation ${index + 1}`}
              className={`${styles.newAnimImage} ${styles[`newAnimImage${index + 1}`]}`}
              style={getImageStyle(index)}
            />
          ))}
          
          <div className={styles.newOverlay} />
        </div>
      </div>
    </section>
  );
}

export default NewAnimation;
