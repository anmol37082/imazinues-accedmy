import { useEffect, useRef, useState } from "react";
import styles from "./StatsAndFacts.module.css";

const stats = [
  {
    value: 7,
    suffix: "+",
    title: "Year Experience",
    subtext: "of Tuning the Talent",
  },
  {
    value: 700,
    suffix: "+",
    title: "Students",
    subtext: "trained in creativity",
  },
  {
    value: 250,
    suffix: "+",
    title: "Placement",
    subtext: "Success Stories",
  },
  {
    value: 99,
    suffix: "%",
    title: "Positive",
    subtext: "Student Feedback",
  },
];

const introText =
  "Hey, I'm Vishant Kumar, the mind behind Imazine Us - A creative agency focused on transforming simple concepts into creative solutions that truly stand out.";
const introChars = introText.split("");

function CountUpValue({ value, suffix = "", start = 1, active }) {
  const [displayValue, setDisplayValue] = useState(start);

  useEffect(() => {
    if (!active) {
      setDisplayValue(start);
      return;
    }

    let frameId;
    const duration = 1400;
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

    return () => window.cancelAnimationFrame(frameId);
  }, [active, start, value]);

  return `${displayValue}${suffix}`;
}

function StatsAndFacts() {
  const introRef = useRef(null);
  const sectionRef = useRef(null);
  const [revealedCount, setRevealedCount] = useState(0);
  const [statsActive, setStatsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(max-width: 540px)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 540px)");
    const updateIsMobile = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setRevealedCount(introChars.length);
      return;
    }

    let frameId = 0;
    let ticking = false;

    const updateReveal = () => {
      if (!introRef.current) {
        return;
      }

      const rect = introRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.92;
      const end = viewportHeight * 0.2;
      const progress = ((start - rect.top) / (start - end)) * 100;
      const nextCount = Math.round(
        (Math.max(0, Math.min(100, progress)) / 100) * introChars.length
      );

      setRevealedCount((currentCount) =>
        currentCount === nextCount ? currentCount : nextCount
      );
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
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestRevealUpdate);
      window.removeEventListener("resize", requestRevealUpdate);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStatsActive(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
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

        <p
          ref={introRef}
          className={styles.intro}
        >
          {introChars.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={
                index < revealedCount
                  ? `${styles.introChar} ${styles.introCharVisible}`
                  : styles.introChar
              }
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      <div className={styles.grid}>
        {stats.map((item) => (
          <article className={styles.card} key={item.title}>
            <h3 className={styles.value}>
              <CountUpValue
                active={statsActive}
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
