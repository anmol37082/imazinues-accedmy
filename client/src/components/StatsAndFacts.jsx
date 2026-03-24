import styles from "./StatsAndFacts.module.css";

const stats = [
  {
    value: "7+",
    title: "Year Experience",
    subtext: "of Tuning the Talent",
  },
  {
    value: "700+",
    title: "Students",
    subtext: "trained in creativity",
  },
  {
    value: "250+",
    title: "Placement",
    subtext: "Success Stories",
  },
  {
    value: "99%",
    title: "Positive",
    subtext: "Student Feedback",
  },
];

function StatsAndFacts() {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <div className={styles.eyebrowWrap}>
          <span className={styles.eyebrowDot} />
          <span className={styles.eyebrow}>Offline Classes</span>
        </div>

        <p className={styles.intro}>
          Hey, I&apos;m Vishant Kumar, the mind behind Imazine Us - A creative
          agency focused on transforming simple concepts into creative solutions
          that truly stand out.
        </p>
      </div>

      <div className={styles.grid}>
        {stats.map((item) => (
          <article className={styles.card} key={item.title}>
            <h3 className={styles.value}>{item.value}</h3>
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
