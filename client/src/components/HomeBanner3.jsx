import styles from "./HomeBanner3.module.css";

function HomeBanner3() {
  return (
    <section className={styles.bannerSection}>
      <picture>
        <source
          media="(max-width: 540px)"
          srcSet="/mobileviewbanner3.png"
        />
        <img
          className={styles.bannerImage}
          src="/HomepageBanner3copy.webp"
          alt="Imazine Us Academy home banner"
        />
      </picture>
    </section>
  );
}

export default HomeBanner3;
