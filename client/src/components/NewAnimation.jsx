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
  const [imageTranslates, setImageTranslates] = useState(Array(8).fill(100));

  const updateAnimation = useCallback(() => {
    const isMobileViewport = window.innerWidth <= 768;
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
    const scrollProgress = Math.max(0, Math.min(1, rawProgress));
    
    const newTranslates = Array.from({ length: 8 }, (_, index) => {
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

      const easedProgress = isTextImage
        ? (1 - Math.pow(1 - progress, 2.4))
        : (1 - Math.pow(1 - progress, 2.8));

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

    setImageTranslates(newTranslates);
  }, []);

  useEffect(() => {
    let rafId;
    const scheduleUpdate = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    rafId = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [updateAnimation]);

  return (
    <section ref={newAnimationRef} className={styles.newAnimation}>
      <div className={styles.newAnimationStage}>
        <div className={styles.newAnimationBg}>
          <div className={styles.newAnimationImage} />
          
          <img 
            src="/newanimation/text.png"
            alt="Text Overlay"
            className={styles.textImage}
            style={{ 
              transform: `translateX(-50%) translateY(${imageTranslates[7]}px)`
            }}
          />
          
          {Array.from({ length: 7 }, (_, index) => {
            return (
              <img
                key={index}
                src={imagePaths[index]}
                alt={`New Animation ${index + 1}`}
                className={`${styles.newAnimImage} ${styles[`newAnimImage${index + 1}`]}`}
                style={{ 
                  transform: `translateY(${imageTranslates[index]}%)`
                }}
              />
            );
          })}
          
          <div className={styles.newOverlay} />
        </div>
      </div>
    </section>
  );
}

export default NewAnimation;

