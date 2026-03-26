import { useRef } from "react";
import styles from "./GraphicDesining.module.css";

const cards = [
  {
    id: 1,
    age: "Lecture 1",
    audience: "Lecture 3",
    title: "Introduction to Graphic Design (Lecture 1-3)",
    description:
      "Understanding graphic design, design fields, creative thinking, and the design process.",
    tint: "#d8ff2b",
    gradient: "linear-gradient(135deg, #d8ff2b, #a7ff0c)",
    art: "linear-gradient(180deg, #b8f2ff, #f9d0b7)",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    age: "Lecture 4",
    audience: "Lecture 7",
    title: "Design Principles (Lecture 4-7)",
    description:
      "Balance, contrast, alignment, hierarchy, repetition, and white space with examples.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #dcbcff, #f5d8f0)",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    age: "Lecture 8",
    audience: "Lecture 10",
    title: "Color Theory (Lecture 8-10)",
    description:
      "Color wheel, color harmony, color psychology, brand color usage.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #83f4ef, #ffd7e7)",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    age: "Lecture 11",
    audience: "Lecture 14",
    title: "Typography (Lecture 11-14)",
    description:
      "Font types, pairing fonts, readability, typography hierarchy.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #8be0ff, #eefcff)",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    age: "Lecture 15",
    audience: "Lecture 20",
    title: "Adobe Photoshop Basics (Lecture 15-20)",
    description:
      "Interface, tools, layers, selections, basic image editing.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #ffe28d, #ffb8d2)",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    age: "Lecture 21",
    audience: "Lecture 24",
    title: "Photoshop for Social Media (Lecture 21-24)",
    description:
      "Instagram posts, banners, thumbnails, and composition techniques.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #a0bcff, #e9d6ff)",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    age: "Lecture 25",
    audience: "Lecture 28",
    title: "Image Manipulation in Photoshop (Lecture 25-28)",
    description:
      "Background removal, blending, lighting effects, and creative edits.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #ffcf8d, #ffdfe5)",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    age: "Lecture 29",
    audience: "Lecture 33",
    title: "Adobe Illustrator Basics (Lecture 29-33)",
    description:
      "Vector graphics, pen tool, shapes, paths, artboards.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #ffb2b2, #fff0c8)",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    age: "Lecture 34",
    audience: "Lecture 37",
    title: "Logo Design (Lecture 34-37)",
    description:
      "Concept creation, sketching ideas, and vector logo creation.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #c3fba8, #d4f4ff)",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    age: "Lecture 38",
    audience: "Lecture 41",
    title: "Branding Basics (Lecture 38-41)",
    description:
      "Brand identity, color system, typography system, brand consistency.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #fbd0ff, #dff6ff)",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    age: "Lecture 42",
    audience: "Lecture 45",
    title: "Poster & Advertisement Design (Lecture 42-45)",
    description:
      "Layout design, visual hierarchy, marketing creatives.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #f0ff9d, #c6e3ff)",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    age: "Lecture 46",
    audience: "Lecture 49",
    title: "Social Media Design (Lecture 46-49)",
    description:
      "Instagram carousel, ad design, modern layout styles.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #d1ffc2, #ffe0b7)",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 13,
    age: "Lecture 50",
    audience: "Lecture 52",
    title: "Print Design (Lecture 50-52)",
    description:
      "Business cards, flyers, brochures, print settings.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #e1d2ff, #f8edc0)",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 14,
    age: "Lecture 53",
    audience: "Lecture 56",
    title: "Portfolio Building (Lecture 53-56)",
    description:
      "Selecting the best work, case study writing, Behance/portfolio preparation.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #bffcff, #ffd2ef)",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 15,
    age: "Lecture 57",
    audience: "Lecture 60",
    title: "Real Client Project / Final Design Project (Lecture 57-60)",
    description:
      "Students work on a complete brand, campaign, or social media project with a final presentation.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #ffc5a6, #d2f0ff)",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
  },
];

function GraphicDesining() {
  const trackRef = useRef(null);

  const scrollCards = (direction) => {
    if (!trackRef.current) {
      return;
    }

    const card = trackRef.current.querySelector(`.${styles.card}`);
    const cardWidth = card ? card.getBoundingClientRect().width : 320;
    const gap = 24;

    trackRef.current.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrowWrap}>
          <span className={styles.eyebrowDot} />
          <span className={styles.eyebrow}>Offline Classes</span>
        </div>

        <h2 className={styles.title}>
          <span className={styles.titlePrimary}>Graphic Designing</span>
          <br />
          <span className={styles.titleSecondary}>
            All the sections cover in 3 months
          </span>
        </h2>
      </div>

      <div className={styles.infoRow}>
        <div className={styles.infoBox}>Classes: Mon - Fri</div>
        <div className={styles.infoBox}>Location: - Zirakpur</div>
      </div>

      <div className={styles.controlsRow}>
        <div className={styles.controls}>
          <button
            className={styles.control}
            type="button"
            aria-label="Previous"
            onClick={() => scrollCards(-1)}
          >
            &lsaquo;
          </button>
          <button
            className={styles.control}
            type="button"
            aria-label="Next"
            onClick={() => scrollCards(1)}
          >
            &rsaquo;
          </button>
        </div>
      </div>

      <div ref={trackRef} className={styles.track}>
        {cards.map((card) => (
          <article
            key={card.id}
            className={styles.card}
            style={{ "--card-bg": card.gradient, "--card-tint": card.tint }}
          >
            <div className={styles.content}>
              <div className={styles.topMeta}>
                <div className={styles.pills}>
                  <span className={styles.pill}>{card.age}</span>
                  <span className={styles.pill}>{card.audience}</span>
                </div>
              </div>

              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>

            <div className={styles.art} style={{ "--art-bg": card.art }}>
              <img
                className={styles.artImage}
                src={card.image}
                alt={card.title}
              />
              <button className={styles.readMore} type="button">
                Read More
                <span className={styles.arrow} aria-hidden="true">
                  <svg viewBox="0 0 640 640" fill="currentColor">
                    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                  </svg>
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GraphicDesining;
