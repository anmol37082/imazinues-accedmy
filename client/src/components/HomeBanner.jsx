import styles from "./HomeBanner.module.css";

function HomeBanner() {
  return (
    <section className={styles.bannerSection}>
      <img
        className={styles.bannerImage}
        src="/Homepage%20Banner.webp"
        alt="Imazine Us Academy home banner"
      />
    </section>
  );
}

export default HomeBanner;
