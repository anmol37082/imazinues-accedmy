import styles from "./HomeBanner.module.css";

function HomeBanner() {
  return (
    <section className={styles.bannerSection}>
      <picture>
        <source
          media="(max-width: 540px)"
          srcSet="/homepagemobileviewbanner.webp"
        />
        <img
          className={styles.bannerImage}
          src="/Homepage%20Banner.webp"
          alt="Imazine Us Academy home banner"
        />
      </picture>
    </section>
  );
}

export default HomeBanner;
