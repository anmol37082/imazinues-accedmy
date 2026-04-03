import styles from "./GraphicDesining.module.css";

function GraphicDesining() {
  return (
    <section className={styles.section}>
      <div className={styles.videoFrame}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source
            media="(max-width: 540px)"
            src="/video/graphicdesignphone.webm"
            type="video/webm"
          />
          <source
            media="(min-width: 541px)"
            src="/video/graphic%20design.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default GraphicDesining;
