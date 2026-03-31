import { useEffect, useState, useRef } from "react";
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
    image: encodeURI("/inquryform/28480869_Tiny graphic designer drawing with big pen on computer screen.svg"),
    alt: "Graphic design inquiry visual",
    text: "Designing today, to define\ntomorrow,",
  },
  {
    image: "/inquryform/4137653_2168227.svg",
    alt: "Creative course inquiry visual",
    text: "Learn video editing today to\nmake content that stands out\nTomorrow",
  },
];

function InquiryForm() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const dropdownRef = useRef(null);

  // Preload Images
  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, []);

  // Slide Interval
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 9000);
    return () => window.clearInterval(intervalId);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (course) => {
    setSelectedCourse(course);
    setIsOpen(false);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className={styles.section} id="inquiry">
      <div className={styles.shell}>
        {/* Left Side: Visuals */}
        <div className={styles.visualPanel}>
          <div key={currentSlide.image} className={styles.imageFrame}>
            <img className={styles.slideImage} src={currentSlide.image} alt={currentSlide.alt} />
          </div>
          <div key={currentSlide.text} className={styles.visualCopy}>
            <p className={styles.visualBrand}>Imazinus Academy</p>
            <p className={styles.visualLines}>{currentSlide.text}</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formPanel}>
          <div className={styles.formIntro}>
            <h3 className={styles.formTitle}>Ready to join offline classes?</h3>
            <p className={styles.formSubtitle}>Complete the form and confirm<br/><span className={styles.subtitle2}>your booking</span></p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.field}>
              <input className={styles.input} type="text" placeholder="Full Name" required />
            </label>

            <label className={styles.field}>
              <input className={styles.input} type="tel" placeholder="Phone Number" required />
            </label>

            <label className={styles.field}>
              <input className={styles.input} type="email" placeholder="Email Address" required />
            </label>

            {/* Custom Dropdown for Green Hover */}
            <div className={styles.dropdownContainer} ref={dropdownRef}>
              <div 
                className={`${styles.field} ${styles.customSelect} ${isOpen ? styles.fieldActive : ""}`} 
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className={selectedCourse ? styles.selectedText : styles.placeholder}>
                  {selectedCourse || "Select Course"}
                </span>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}></span>
              </div>

              {isOpen && (
                <ul className={styles.optionsList}>
                  {courseOptions.map((course) => (
                    <li 
                      key={course} 
                      className={styles.optionItem}
                      onClick={() => handleSelect(course)}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button className={styles.submitButton} type="submit">
              <span>Start Learning</span>
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
                <circle cx="10.2004" cy="7.1999" r="1.8" fill="currentColor" />
                <circle cx="10.2004" cy="16.8" r="1.8" fill="currentColor" />
                <circle cx="14.9992" cy="12.0002" r="1.8" fill="currentColor" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InquiryForm;