import styles from "./HomeBanner3.module.css";

function HomeBanner3() {
  return (
    <section className={styles.bannerSection}>
      <picture>
        <source
          media="(max-width: 540px)"
          srcSet="/mobileviewbanner3.webp"
        />
        <img
          className={styles.bannerImage}
          src="/HomepageBanner3copy.webp"
          alt="Imazine Us Academy home banner"
        />
      </picture>
      <a href="#inquiry" className={styles.enrollButton}>
        <span className={styles.btnLabel}>ENROLL NOW</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.btnIcon}
          aria-hidden="true"
        >
          <g opacity="1">
            <circle cx="10.2004" cy="7.1999" r="1.8" fill="currentColor" />
            <circle cx="10.2004" cy="16.8" r="1.8" fill="currentColor" />
            <circle cx="14.9992" cy="12.0002" r="1.8" fill="currentColor" />
          </g>
        </svg>
      </a>
    </section>
  );
}

export default HomeBanner3;
