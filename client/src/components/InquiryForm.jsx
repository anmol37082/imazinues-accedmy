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
    text: "Designing today, to define\ntomorrow",
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [courseError, setCourseError] = useState(false); // Error state for dropdown
  const dropdownRef = useRef(null);
  const canvasRef = useRef(null);
  const formRef = useRef(null);

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

  // Lock scroll when popup shows
  useEffect(() => {
    if (showThankYou) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showThankYou]);

  // Confetti Animation Function
  const startConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 150;
    const colors = ["#00EF02", "#00c853", "#76ff03", "#64dd17", "#aeea00", "#ffeb3b", "#ff9800", "#ff5722"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15 - 5,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.2,
        opacity: 1,
      });
    }

    let animationId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let activeParticles = 0;

      particles.forEach((particle) => {
        if (particle.opacity > 0) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += particle.gravity;
          particle.rotation += particle.rotationSpeed;
          particle.opacity -= 0.005;

          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          ctx.restore();
          activeParticles++;
        }
      });

      if (activeParticles > 0) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    setTimeout(() => {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 4000);
  };

  const handleSelect = (course) => {
    setSelectedCourse(course);
    setCourseError(false); // Clear error when course selected
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if course is selected
    if (!selectedCourse) {
      setCourseError(true);
      // Scroll to dropdown or focus
      dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Hide form
    setIsSubmitted(true);

    // Show thank you popup after delay
    setTimeout(() => {
      setShowThankYou(true);
      startConfetti();
    }, 300);
  };

  const handleClosePopup = () => {
    setShowThankYou(false);
    setIsSubmitted(false);
    setSelectedCourse("");
    setCourseError(false);
    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className={styles.section} id="inquiry">
      {/* Confetti Canvas */}
      <canvas ref={canvasRef} className={styles.confettiCanvas} />

      {/* Overlay */}
      {showThankYou && <div className={styles.overlay} onClick={handleClosePopup} />}

      {/* Thank You Popup */}
      {showThankYou && (
        <div className={styles.thankYouPopup}>
          <button className={styles.closeButton} onClick={handleClosePopup}>×</button>
          <div className={styles.checkmark}>✓</div>
          <h3 className={styles.thankYouTitle}>Thank You!</h3>
          <p className={styles.thankYouText}>Your enquiry has been submitted successfully.</p>
          <p className={styles.thankYouSubtext}>We will contact you soon!</p>
        </div>
      )}

      <div className={`${styles.shell} ${isSubmitted ? styles.formHidden : ""}`}>
        {/* Left Side: Visuals */}
        <div className={styles.visualPanel}>
          <div key={currentSlide.image} className={styles.imageFrame}>
            <img className={styles.slideImage} src={currentSlide.image} alt={currentSlide.alt} />
          </div>
          <div key={currentSlide.text} className={styles.visualCopy}>
            <p className={styles.visualBrand}>Imazineus Academy</p>
            <p className={styles.visualLines}>{currentSlide.text}</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formPanel}>
          <div className={styles.formIntro}>
            <h3 className={styles.formTitle}>Ready to join offline classes?</h3>
            <p className={styles.formSubtitle}>
              Complete the form and confirm
              <br />
              <span className={styles.subtitle2}>your booking</span>
            </p>
          </div>

          <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <input className={styles.input} type="text" placeholder="Full Name" required />
            </label>

            <label className={styles.field}>
              <input className={styles.input} type="tel" placeholder="Phone Number" required />
            </label>

            <label className={styles.field}>
              <input className={styles.input} type="email" placeholder="Email Address" required />
            </label>

            {/* Custom Dropdown with Required Validation */}
            <div className={styles.dropdownContainer} ref={dropdownRef}>
              <div
                className={`${styles.field} ${styles.customSelect} ${isOpen ? styles.fieldActive : ""} ${courseError ? styles.fieldError : ""}`}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setCourseError(false); // Clear error on click
                }}
              >
                <span className={selectedCourse ? styles.selectedText : styles.placeholder}>
                  {selectedCourse || "Select Course *"}
                </span>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}></span>
              </div>

              {/* Error Message */}
              {courseError && (
                <span className={styles.errorText}>Please select a course</span>
              )}

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