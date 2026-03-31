import { useEffect, useState } from "react";
import styles from "./InquiryForm.module.css";

const courseOptions = [
  "Graphic Designing",
  "Video Editing",
  "Digital Marketing",
  "Web Development",
  "Graphic Designing + Video Editing",
  

];

const slides = [
  {
    image: encodeURI(
      "/inquryform/28480869_Tiny graphic designer drawing with big pen on computer screen.svg"
    ),
    alt: "Graphic design inquiry visual",
    text: "Designing today, to define tomorrow,",
  },
  {
    image: "/inquryform/4137653_2168227.svg",
    alt: "Creative course inquiry visual",
    text: "Learn video editing today to make content that stands out Tomorrow",
  },
];

function InquiryForm() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 9000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className={styles.section} id="inquiry">
      <div className={styles.shell}>
        <div className={styles.visualPanel}>
          <div key={currentSlide.image} className={styles.imageFrame}>
            <img
              className={styles.slideImage}
              src={currentSlide.image}
              alt={currentSlide.alt}
            />
          </div>

          <div key={currentSlide.text} className={styles.visualCopy}>
            <p className={styles.visualBrand}>Imazinus Academy</p>
            <p className={styles.visualLines}>{currentSlide.text}</p>
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
                <option value="" disabled hidden>
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
