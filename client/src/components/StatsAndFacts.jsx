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
  const [revealProgress, setRevealProgress] = useState(0);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const updateReveal = () => {
      if (!introRef.current) {
        return;
      }

      const rect = introRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.92;
      const end = viewportHeight * 0.2;
      const progress = ((start - rect.top) / (start - end)) * 100;

      setRevealProgress(Math.max(0, Math.min(100, progress)));
    };

    updateReveal();
    window.addEventListener("scroll", updateReveal, { passive: true });
    window.addEventListener("resize", updateReveal);

    return () => {
      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
    };
  }, []);

  useEffect(() => {
    const updateStatsState = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      setStatsActive(rect.top < viewportHeight * 0.8 && rect.bottom > 0);
    };

    updateStatsState();
    window.addEventListener("scroll", updateStatsState, { passive: true });
    window.addEventListener("resize", updateStatsState);

    return () => {
      window.removeEventListener("scroll", updateStatsState);
      window.removeEventListener("resize", updateStatsState);
    };
  }, []);

  const revealedCount = Math.round((revealProgress / 100) * introText.length);

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
          {introText.split("").map((char, index) => (
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
