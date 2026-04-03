import styles from "./GraphicDesining.module.css";

function GraphicDesining() {
  return (
    <section className={styles.section}>
      <div className={styles.videoFrame}>
        <video
          className={styles.video}
          src="/video/graphic%20design.webm"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default GraphicDesining;
