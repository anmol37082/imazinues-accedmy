import styles from "./InquiryForm.module.css";

const highlights = [
  "Offline practical classes with mentor support",
  "Courses for graphic design, video editing and more",
  "Quick callback for course details and timings",
];

function InquiryForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.section} id="inquiry">
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Enquiry Form</p>
          <h2 className={styles.title}>Talk to our team about the right course.</h2>
          <p className={styles.description}>
            Share your details and course interest. We will connect with you to
            explain batches, fees and learning path.
          </p>

          <div className={styles.meta}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Call Us</span>
              <a className={styles.metaValue} href="tel:+919056767672">
                +91 90567 67672
              </a>
            </div>

            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>Location</span>
              <p className={styles.metaText}>Zirakpur, Chandigarh Tricity</p>
            </div>
          </div>

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item} className={styles.highlightItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form className={styles.formCard} onSubmit={handleSubmit}>
          <div className={styles.fieldGrid}>
            <label className={styles.field}>
              <span className={styles.label}>Full Name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Phone Number</span>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email Address</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Course Interest</span>
              <select className={styles.input} name="course" defaultValue="">
                <option value="" disabled>
                  Select a course
                </option>
                <option value="graphic-design">Graphic Design</option>
                <option value="video-editing">Video Editing</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="web-development">Web Development</option>
                <option value="content-writing">Content Writing</option>
              </select>
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Message</span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              placeholder="Tell us what you want to learn"
            />
          </label>

          <button className={styles.button} type="submit">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default InquiryForm;
