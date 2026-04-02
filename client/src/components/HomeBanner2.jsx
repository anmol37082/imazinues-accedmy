import styles from "./HomeBanner2.module.css";

function HomeBanner2() {
  return (
    <section className={styles.bannerSection}>
      <picture>
        <source media="(max-width: 540px)" srcSet="/banner2mobileview.webp" />
        <img
          className={styles.bannerImage}
          src="/Homepage%20Banner%202%20copy.webp"
          alt="Imazine Us Academy secondary banner"
        />
      </picture>
    </section>
  );
}

export default HomeBanner2;
