import { useEffect, useRef, useState } from "react";
import styles from "./Reviews.module.css";

const reviews = [
  {
    name: "Sohel Khan",
    role: "Video Editor",
    title: "Improved my skills and grew in confidence",
    quote:
      "I'm truly grateful to Vishant Sir, who truly helped me and guided me to achieve my best level in video editing.",
    avatar: "/reviews/Sohel.webp",
  },
  {
    name: "Sahil Bhardwaj",
    role: "Video Editor",
    title: "Working on real-life projects gave me practical experience and boosted my confidence",
    quote:
      "I have completed my internship as a video editor here, and I'm happy to share that I improved significantly during this time, and now I have a high-paying job in Chandigarh.",
    avatar: "/reviews/sahilbardwaj.webp",
  },
  {
    name: "Harjeet Singh",
    role: "Graphic Design",
    title: "Best graphic design classes",
    quote:
      "An amazing institute for learning graphic design. The assignments and projects truly helped me. I will recommend everyone who is looking for the best graphic design classes in Zirakpur, Chandigarh, Panchkula, or Tricity.",
    avatar: "/reviews/HarjeetSingh.webp",
  },
  {
    name: "Pratham Narule",
    role: "Graphic Design",
    title: "Learning Something new",
    quote:
      "Great learning experience at Imazine Us. I learned Photoshop and Illustrator with practical projects. Vishant Sir taught me a lot about everything. Thank you so much, Imazine Us Academy.",
    avatar: "/reviews/parthamnarule.webp",
  },
  {
    name: "Riya",
    role: "Digital Marketer",
    title: "Great guidance",
    quote:
      "I was a complete fresher when I joined Imazine Us, but the journey turned out to be amazing. I learned digital marketing from scratch, and the mentors were incredibly supportive, guiding me at every step. They made sure I understood everything clearly. Overall, I had a 10/10 learning experience.",
    avatar: "/reviews/riya.webp",
  },
  {
    name: "Saloni",
    role: "Graphic + Video Editing",
    title: "Choosing Imazine Us was the right decision",
    quote:
      "The Graphic + Video Editing course is highly practical and focused on real-world skills. I learned techniques that I can actually use in my work. Choosing Imazine Us was the right decision, as they truly stand out as one of the best institutes in Tricity. The environment is friendly, and the mentors are extremely supportive and helpful throughout the learning journey.",
    avatar: "/reviews/saloni.webp",
  },
  {
    name: "Neeraj",
    role: "Video Editor",
    title: "Becoming the master of my field",
    quote:
      "Imazine Us really boosted my confidence and my video editing skills. It helped me grow both creatively and professionally.",
    avatar: "/reviews/neeraj.webp",
  },
  {
    name: "Aryan Grover",
    role: "Web Developer",
    title: "The practical exposure made a big difference in my learning.",
    quote:
      "I worked here as a Web Developer intern, where I got the opportunity to work on real projects that truly helped me discover and improve my skills. If you want to learn and gain experience through real-life projects, I highly recommend this place.",
    avatar: "/reviews/Aryangrover.webp",
  },
  {
    name: "Anmol Singh",
    role: "Web Developer",
    title: "Found the best",
    quote:
      "Looking for the best Web Developer classes or an internship in Zirakpur, Chandigarh, Panchkula, or Tricity? Then you are welcome to Imazine Us Academy, where you can learn real skills and gain hands-on experience through practical projects guided by expert mentors.",
    avatar: "/reviews/anmolsingh.webp",
  },
  {
    name: "Aryan Singh",
    role: "Digital Marketer",
    title: "Found what I was truly searching for",
    quote:
      "I was really confused about finding the right place to learn digital marketing where I could work on real projects. I struggled to choose a platform that offers practical experience, not just theory. Imazine Us really helped me a lot with it.",
    avatar: "/reviews/aryansingh.webp",
  },
  {
    name: "Muskaan",
    role: "Digital Marketer",
    title: "Discover my true interests and learning path.",
    quote:
      "Before joining Imazine Us, I was really confused about digital marketing and unsure about what I actually wanted to learn. I struggled to find the right direction, but at Imazine Us, the mentors guided me at every step and helped me discover my true interests and learning path.",
    avatar: "/reviews/muskan.webp",
  },
  {
    name: "Sourav Dhiman",
    role: "Content Writer",
    title: "Discovering my real passion",
    quote:
      "Finding what true content writing is feels like discovering my real passion. I genuinely enjoy creating new content, and Imazine Us Academy has taught me much more than I ever expected. Getting the opportunity to work with real clients has helped me gain practical experience and improve my skills with confidence.",
    avatar: "/reviews/souravdhiman.webp",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function Reviews() {
  const sectionRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") {
      return undefined;
    }

    let frameId = 0;
    let ticking = false;
    let hasUserScrolled = false;

    const updateVisibleCount = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const triggerLine = viewportHeight * 0.24;
      const revealDistance = triggerLine - rect.top;
      const stepDistance = viewportHeight * 0.18;
      const nextVisibleCount = revealDistance <= 0
        ? 0
        : Math.max(
            0,
            Math.min(reviews.length, Math.floor(revealDistance / stepDistance))
          );

      setVisibleCount(nextVisibleCount);
    };

    const requestUpdate = () => {
      hasUserScrolled = true;

      if (ticking) {
        return;
      }

      ticking = true;
      frameId = window.requestAnimationFrame(() => {
        ticking = false;
        updateVisibleCount();
      });
    };

    const handleScroll = () => {
      requestUpdate();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      if (!hasUserScrolled) {
        setVisibleCount(0);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>What Students Say</h2>

        <div className={`${styles.summary} ${styles.summaryDesktop}`}>
          <span className={styles.summaryLineMedium}>
            Real stories from our students and interns.
          </span>
          <span className={styles.summaryLineLarge}>
            Their growth came from practical projects, mentor support,
          </span>
          <span className={styles.summaryLineSmall}>
            and real-world learning.
          </span>
        </div>

        <div className={`${styles.summary} ${styles.summaryMobile}`}>
          <span className={styles.summaryLineMedium}>
            Real stories from our
          </span>
          <span className={styles.summaryLineLarge}>
            students and interns. Their growth came
          </span>
          <span className={styles.summaryLineSmall}>
            from practical projects, mentor
          </span>
          <span className={styles.summaryLineFourth}>
            support and real world
          </span>
          <span className={styles.summaryLineFifth}>
            learning.
          </span>
        </div>
      </div>

      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <article
            key={review.name}
            className={`${styles.card} ${index < visibleCount ? styles.cardVisible : ""}`}
          >
            <div className={styles.cardTop}>
              {review.avatar ? (
                <img
                  className={styles.avatar}
                  src={review.avatar}
                  alt={review.name}
                />
              ) : (
                <div className={styles.avatarFallback} aria-hidden="true">
                  {getInitials(review.name)}
                </div>
              )}
              <span className={styles.badge} aria-hidden="true">
                in
              </span>
            </div>

            <h3 className={styles.cardTitle}>{review.title}</h3>
            <p className={styles.quote}>{review.quote}</p>

            <div className={styles.footer}>
              <div>
                <p className={styles.name}>{review.name}</p>
                <p className={styles.role}>{review.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
