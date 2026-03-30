import { useEffect, useState } from "react";
import styles from "./InquiryForm.module.css";

const courseOptions = [
  "Graphic Designing",
  "Video Editing",
  "Digital Marketing",
  "Web Development",
];

const slides = [
  {
    image: encodeURI(
      "/inquryform/28480869_Tiny graphic designer drawing with big pen on computer screen.svg"
    ),
    alt: "Graphic design inquiry visual",
    lines: ["Master Video", "Editing Skills with", "Real Practice."],
  },
  {
    image: "/inquryform/4137653_2168227.svg",
    alt: "Creative course inquiry visual",
    lines: ["Learn Reels and", "Cinematic Editing in", "Offline Classes."],
  },
];

function InquiryForm() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let fadeTimer;

    const intervalId = window.setInterval(() => {
      setIsVisible(false);
      fadeTimer = window.setTimeout(() => {
        setActiveSlide((current) => (current + 1) % slides.length);
        setIsVisible(true);
      }, 350);
    }, 3500);

    return () => {
      window.clearInterval(intervalId);
      if (fadeTimer) {
        window.clearTimeout(fadeTimer);
      }
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className={styles.section} id="inquiry">
      <div className={styles.shell}>
        <div className={styles.visualPanel}>
          <div
            className={`${styles.imageFrame} ${
              isVisible ? styles.contentVisible : styles.contentHidden
            }`}
          >
            <img
              className={styles.slideImage}
              src={currentSlide.image}
              alt={currentSlide.alt}
            />
          </div>

          <div
            className={`${styles.visualCopy} ${
              isVisible ? styles.contentVisible : styles.contentHidden
            }`}
          >
            <p className={styles.visualBrand}>Imazinus Academy</p>
            <p className={styles.visualLines}>
              {currentSlide.lines[0]}
              <br />
              {currentSlide.lines[1]}
              <br />
              {currentSlide.lines[2]}
            </p>
          </div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.formIntro}>
            <h3 className={styles.formTitle}>Are you ready for offline classes?</h3>
            <p className={styles.formSubtitle}>Fill the form, book your Slot</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
              />
            </label>

            <label className={styles.field}>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
              />
            </label>

            <label className={styles.field}>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
              />
            </label>

            <label className={styles.field}>
              <select className={styles.select} name="course" defaultValue="">
                <option value="" disabled>
                  Select Course
                </option>
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </label>

            <button className={styles.submitButton} type="submit">
              Start Learning
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InquiryForm;
