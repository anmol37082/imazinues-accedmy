import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import styles from "./StatsAndFacts.module.css";

const stats = [
  { value: 7, suffix: "+", title: "Year Experience", subtext: "of Tuning the Talent" },
  { value: 700, suffix: "+", title: "Students", subtext: "trained in creativity" },
  { value: 250, suffix: "+", title: "Placement", subtext: "Success Stories" },
  { value: 99, suffix: "%", title: "Positive", subtext: "Student Feedback" },
];

const introText =
  "I’m Vishant Kumar, founder of Imazine Us Academy, where we turn simple ideas into powerful creative skills and help students become future-ready creators.";
const countAnimationTriggerText =
  "I’m Vishant Kumar, founder of Imazine Us Academy";

function CountUpValue({ value, suffix = "", start = 1, active }) {
  const [displayValue, setDisplayValue] = useState(start);

  useEffect(() => {
    if (!active) {
      return;
    }

    let frameId;
    const duration = 1900;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(start + (value - start) * eased);
      setDisplayValue(nextValue);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [active, start, value]);

  return `${active ? displayValue : start}${suffix}`;
}

function StatsAndFacts() {
  const introRef = useRef(null);
  const introCharsRef = useRef([]);
  const splitInstanceRef = useRef(null);
  const sectionRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);
  const [countAnimationActive, setCountAnimationActive] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.innerWidth <= 540;
  });
  const triggerCharCountRef = useRef(countAnimationTriggerText.length);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 540px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    if (!introRef.current || typeof window === "undefined") {
      return undefined;
    }

    const splitInstance = new SplitType(introRef.current, {
      types: "words, chars",
      wordClass: styles.introWord,
      charClass: styles.introChar,
    });

    splitInstanceRef.current = splitInstance;
    introCharsRef.current = splitInstance.chars ?? [];
    triggerCharCountRef.current = Math.min(
      countAnimationTriggerText.length,
      introCharsRef.current.length
    );

    return () => {
      introCharsRef.current = [];
      splitInstanceRef.current?.revert();
      splitInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const introChars = introCharsRef.current;
    const totalChars = introChars.length;
    const triggerCharCount = triggerCharCountRef.current;

    const updateRevealCount = (count) => {
      introChars.forEach((char, index) => {
        char.classList.toggle(styles.introCharVisible, index < count);
      });
    };

    if (!statsActive) {
      updateRevealCount(0);
      return undefined;
    }

    if (isMobile) {
      let frameId = 0;
      const duration = 1100;
      const startTime = performance.now();

      const animateMobileReveal = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextCount = Math.round(totalChars * eased);

        updateRevealCount(nextCount);

        if (nextCount >= triggerCharCount) {
          setCountAnimationActive(true);
        }

        if (progress < 1) {
          frameId = window.requestAnimationFrame(animateMobileReveal);
        }
      };

      frameId = window.requestAnimationFrame(animateMobileReveal);

      return () => {
        if (frameId) {
          window.cancelAnimationFrame(frameId);
        }
      };
    }

    let frameId = 0;
    let ticking = false;

    const updateReveal = () => {
      if (!introRef.current) {
        return;
      }

      const rect = introRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.98;
      const end = viewportHeight * 0.08;
      const progress = ((start - rect.top) / (start - end)) * 100;
      const nextCount = Math.round(
        (Math.max(0, Math.min(100, progress)) / 100) * totalChars
      );

      updateRevealCount(nextCount);
      setCountAnimationActive(nextCount >= triggerCharCount && triggerCharCount > 0);
    };

    const requestRevealUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      frameId = window.requestAnimationFrame(() => {
        ticking = false;
        updateReveal();
      });
    };

    updateReveal();
    window.addEventListener("scroll", requestRevealUpdate, { passive: true });
    window.addEventListener("resize", requestRevealUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", requestRevealUpdate);
      window.removeEventListener("resize", requestRevealUpdate);
    };
  }, [isMobile, statsActive]);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatsActive(entry.isIntersecting);

        if (!entry.isIntersecting) {
          setCountAnimationActive(false);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.copy}>
        <div className={styles.eyebrowWrap}>
          <span className={styles.eyebrowDot} />
          <span className={styles.eyebrow}>Offline Classes</span>
        </div>

        <p ref={introRef} className={styles.intro}>
          {introText}
        </p>
      </div>

      <div className={styles.grid}>
        {stats.map((item) => (
          <article className={styles.card} key={item.title}>
            <h3 className={styles.value}>
              <CountUpValue
                key={`${item.title}-${countAnimationActive}`}
                active={countAnimationActive}
                value={item.value}
                suffix={item.suffix}
              />
            </h3>
            <p className={styles.label}>
              <span className={styles.labelStrong}>{item.title}</span>
              <span className={styles.labelSubtext}>{item.subtext}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsAndFacts;
