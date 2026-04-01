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

// ✅ NAYA CHECKMARK SVG COMPONENT
const CheckmarkSVG = () => (
  <svg 
    version="1.1" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px" 
    width="80px" 
    height="80px" 
    viewBox="0 0 122.88 122.88" 
    enableBackground="new 0 0 122.88 122.88" 
    xmlSpace="preserve"
    className={styles.checkmarkSvg}
  >
    <g>
      <path 
        fill="#6BBE66" 
        d="M34.388,67.984c-0.286-0.308-0.542-0.638-0.762-0.981c-0.221-0.345-0.414-0.714-0.573-1.097 c-0.531-1.265-0.675-2.631-0.451-3.934c0.224-1.294,0.812-2.531,1.744-3.548l0.34-0.35c2.293-2.185,5.771-2.592,8.499-0.951 c0.39,0.233,0.762,0.51,1.109,0.827l0.034,0.031c1.931,1.852,5.198,4.881,7.343,6.79l1.841,1.651l22.532-23.635 c0.317-0.327,0.666-0.62,1.035-0.876c0.378-0.261,0.775-0.482,1.185-0.661c0.414-0.181,0.852-0.323,1.3-0.421 c0.447-0.099,0.903-0.155,1.356-0.165h0.026c0.451-0.005,0.893,0.027,1.341,0.103c0.437,0.074,0.876,0.193,1.333,0.369 c0.421,0.161,0.825,0.363,1.207,0.604c0.365,0.231,0.721,0.506,1.056,0.822l0.162,0.147c0.316,0.313,0.601,0.653,0.85,1.014 c0.256,0.369,0.475,0.766,0.652,1.178c0.183,0.414,0.325,0.852,0.424,1.299c0.1,0.439,0.154,0.895,0.165,1.36v0.23 c-0.004,0.399-0.042,0.804-0.114,1.204c-0.079,0.435-0.198,0.863-0.356,1.271c-0.16,0.418-0.365,0.825-0.607,1.21 c-0.238,0.377-0.518,0.739-0.832,1.07l-27.219,28.56c-0.32,0.342-0.663,0.642-1.022,0.898c-0.369,0.264-0.767,0.491-1.183,0.681 c-0.417,0.188-0.851,0.337-1.288,0.44c-0.435,0.104-0.889,0.166-1.35,0.187l-0.125,0.003c-0.423,0.009-0.84-0.016-1.241-0.078 l-0.102-0.02c-0.415-0.07-0.819-0.174-1.205-0.31c-0.421-0.15-0.833-0.343-1.226-0.575l-0.063-0.04 c-0.371-0.224-0.717-0.477-1.032-0.754l-0.063-0.06c-1.58-1.466-3.297-2.958-5.033-4.466c-3.007-2.613-7.178-6.382-9.678-9.02 L34.388,67.984L34.388,67.984z M61.44,0c16.96,0,32.328,6.883,43.453,17.987c11.104,11.125,17.986,26.493,17.986,43.453 c0,16.961-6.883,32.329-17.986,43.454C93.769,115.998,78.4,122.88,61.44,122.88c-16.961,0-32.329-6.882-43.454-17.986 C6.882,93.769,0,78.4,0,61.439C0,44.48,6.882,29.112,17.986,17.987C29.112,6.883,44.479,0,61.44,0L61.44,0z M96.899,25.981 C87.826,16.907,75.29,11.296,61.44,11.296c-13.851,0-26.387,5.611-35.46,14.685c-9.073,9.073-14.684,21.609-14.684,35.458 c0,13.851,5.611,26.387,14.684,35.46s21.609,14.685,35.46,14.685c13.85,0,26.386-5.611,35.459-14.685s14.684-21.609,14.684-35.46 C111.583,47.59,105.973,35.054,96.899,25.981L96.899,25.981z"
      />
    </g>
  </svg>
);

function InquiryForm() {
  // ... (baaki state aur functions same rahenge)
  const [activeSlide, setActiveSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const dropdownRef = useRef(null);
  const canvasRef = useRef(null);
  const formRef = useRef(null);

  // ... (saare useEffects same rahenge)
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  // Confetti function same
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
    setCourseError(false);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCourse) {
      setCourseError(true);
      dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setIsSubmitted(true);
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
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className={styles.section} id="inquiry">
      <canvas ref={canvasRef} className={styles.confettiCanvas} />
      {showThankYou && <div className={styles.overlay} onClick={handleClosePopup} />}
      
      {/* Thank You Popup - YAHAN CHANGE HAI */}
      {showThankYou && (
        <div className={styles.thankYouPopup}>
          <button className={styles.closeButton} onClick={handleClosePopup}>×</button>
          
          {/* ✅ PURANA CHECKMARK DIV HATAYA, NAYA SVG COMPONENT LAGAYA */}
          <div className={styles.checkmarkContainer}>
            <CheckmarkSVG />
          </div>
          
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

            <div className={styles.dropdownContainer} ref={dropdownRef}>
              <div
                className={`${styles.field} ${styles.customSelect} ${isOpen ? styles.fieldActive : ""} ${courseError ? styles.fieldError : ""}`}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setCourseError(false);
                }}
              >
                <span className={selectedCourse ? styles.selectedText : styles.placeholder}>
                  {selectedCourse || "Select Course *"}
                </span>
                <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}></span>
              </div>

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