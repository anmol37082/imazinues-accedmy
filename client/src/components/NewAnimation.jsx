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

const imageRevealOrder = [0, 3, 1, 5, 2, 4, 6];
const imageStartOffsets = [0.06, 0.14, 0.22, 0.3, 0.38, 0.46, 0.54];
const imageTravelDistances = [135, 120, 145, 130, 140, 125, 150];
const imageFinalOffsets = [34, 32, 30, 32, 30, 32, 34];
const mobileFinalOffsets = [4, 2, 0, 2, -20, -18, 34];
const mobileTravelBoost = [50, 48, 54, 50, 54, 48, 58];
const mobileProgressOffset = 0.14;

function NewAnimation() {
  const newAnimationRef = useRef(null);
  const lastMobileProgressRef = useRef(mobileProgressOffset);
  const [imageTranslates, setImageTranslates] = useState(Array(8).fill(100));
  const isSafariRef = useRef(false);
  const rafIdRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const targetTranslatesRef = useRef(Array(8).fill(100));
  const currentTranslatesRef = useRef(Array(8).fill(100));

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    isSafariRef.current = /^((?!chrome|android).)*safari/i.test(ua) && !ua.includes('chrome');
  }, []);

  const calculateTargets = useCallback(() => {
    const isMobileViewport = window.innerWidth <= 768;
    const isSafari = isSafariRef.current;
    const newAnimationRect = newAnimationRef.current?.getBoundingClientRect();
    if (!newAnimationRect) return;

    const scrollY = window.scrollY;
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
      ? Math.max(normalizedProgress, lastMobileProgressRef.current - clampValue)
      : normalizedProgress;

    if (isMobileViewport) {
      lastMobileProgressRef.current = scrollProgress;
    } else {
      lastMobileProgressRef.current = mobileProgressOffset;
    }
    
    const newTargets = Array.from({ length: 8 }, (_, index) => {
      const isTextImage = index === 7;
      const revealIndex = isTextImage ? 0 : imageRevealOrder.indexOf(index);
      let startOffset = isTextImage ? 0.1 : imageStartOffsets[revealIndex];
      let animationRange = isTextImage ? 0.72 : 0.58;

      if (isMobileViewport && index === 0) {
        startOffset = 0.16;
        animationRange = 0.7;
      }

      let progress = (scrollProgress - startOffset) / animationRange;
      progress = Math.max(0, Math.min(1, progress));

      // LINEAR for Safari (no easing calculation)
      const easedProgress = isSafari
        ? progress
        : (isTextImage ? (1 - Math.pow(1 - progress, 2.4)) : (1 - Math.pow(1 - progress, 2.8)));

      const currentTravelDistance = isTextImage
        ? (isMobileViewport ? 190 : 140)
        : imageTravelDistances[index] + (isMobileViewport ? mobileTravelBoost[index] : 0) + (isMobileViewport && index === 0 ? 28 : 0);
      
      const currentFinalOffset = isTextImage
        ? 0
        : (isMobileViewport ? mobileFinalOffsets[index] : imageFinalOffsets[index]);

      return isTextImage
        ? currentTravelDistance * (1 - easedProgress)
        : currentFinalOffset + ((currentTravelDistance - currentFinalOffset) * (1 - easedProgress));
    });

    targetTranslatesRef.current = newTargets;
  }, []);

  const interpolate = useCallback(() => {
    const isSafari = isSafariRef.current;
    const lerpFactor = isSafari ? 0.4 : 0.15;
    
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
    const throttleMs = isSafari ? 16 : 8;
    
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
          
          <img 
            src="/newanimation/text.png"
            alt="Text Overlay"
            className={styles.textImage}
            style={getTextStyle()}
          />
          
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