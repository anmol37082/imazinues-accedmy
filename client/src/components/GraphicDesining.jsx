import { useRef } from "react";
import styles from "./GraphicDesining.module.css";

const softwareIcons = [
  { id: "ps", label: "Photoshop", tone: styles.photoshopIcon },
  { id: "ai", label: "Illustrator", tone: styles.illustratorIcon },
  { id: "id", label: "InDesign", tone: styles.indesignIcon },
];

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
        <div className={styles.cornerMeta}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrow}>Offline Classes</span>
          </div>

          <div className={styles.softwareWrap} aria-label="Software icons">
            <div className={styles.softwareIcons}>
              {softwareIcons.map((software) => (
                <span
                  key={software.id}
                  className={`${styles.softwareIcon} ${software.tone}`}
                  aria-hidden="true"
                >
                  {software.id === "ps" ? (
                    <svg viewBox="0 0 511.76 498.97" className={styles.softwareSvg}>
                      <rect width="511.76" height="498.97" rx="90.62" />
                      <path d="M115.24,349.91V130.53c0-1.59.68-2.4,2.06-2.4,3.65,0,7,0,12-.17s10.47-.23,16.31-.34l18.54-.35q9.78-.17,19.39-.17,26.09,0,44,6.52a76.4,76.4,0,0,1,28.66,17.51,67.06,67.06,0,0,1,15.62,24.21A80.31,80.31,0,0,1,276.61,203q0,27.48-12.7,45.32a71.82,71.82,0,0,1-34.33,25.92c-14.42,5.38-30.45,7.2-48.07,7.2-5,0-8.58-.05-10.64-.17s-5.15-.17-9.27-.17v68.49a2.72,2.72,0,0,1-2.32,3.09,2.49,2.49,0,0,1-.77,0H117.64C116,352.65,115.24,351.74,115.24,349.91ZM161.6,169.33v71.55q4.46.35,8.24.34h11.33a80.56,80.56,0,0,0,24.55-3.92A37,37,0,0,0,223.23,226q6.69-7.89,6.69-22a34.74,34.74,0,0,0-5-18.88A32,32,0,0,0,210,172.93,63.68,63.68,0,0,0,185,168.64q-8.25,0-14.59.17t-8.76.52Z" />
                      <path d="M409.35,227.87a80,80,0,0,0-20.43-7.21,108.28,108.28,0,0,0-23.86-2.75,44.38,44.38,0,0,0-12.87,1.55,11.55,11.55,0,0,0-6.7,4.29,10.79,10.79,0,0,0-1.71,5.84,9.08,9.08,0,0,0,2.06,5.49,23.25,23.25,0,0,0,7.21,5.66,141.8,141.8,0,0,0,15.1,7,150,150,0,0,1,32.79,15.62,50,50,0,0,1,16.82,17.68,47.17,47.17,0,0,1,5,22,49.41,49.41,0,0,1-8.24,28.33,54.23,54.23,0,0,1-23.86,19.05Q375,357.3,352,357.3a140.51,140.51,0,0,1-29-2.75,92.44,92.44,0,0,1-21.8-6.87,4.44,4.44,0,0,1-2.41-4.12V306.49a2,2,0,0,1,.86-1.89,1.66,1.66,0,0,1,1.89.17A91.62,91.62,0,0,0,328,315.24a108.66,108.66,0,0,0,25.07,3.26q12,0,17.68-3.09a9.7,9.7,0,0,0,5.66-8.92q0-4.47-5.15-8.59T350.3,288a126.06,126.06,0,0,1-30.38-15.45,52.42,52.42,0,0,1-16.14-18,47.35,47.35,0,0,1-5-21.8A49.21,49.21,0,0,1,306,206.93a52.37,52.37,0,0,1,22.32-19.57q15.1-7.55,37.76-7.55a167.13,167.13,0,0,1,26.44,1.88,69.58,69.58,0,0,1,18.4,5,3.13,3.13,0,0,1,2.06,1.89,9.31,9.31,0,0,1,.34,2.57v34.68a2.3,2.3,0,0,1-1,2.06A3.33,3.33,0,0,1,409.35,227.87Z" />
                    </svg>
                  ) : software.id === "ai" ? (
                    <svg viewBox="0 0 511.45 498.66" className={styles.softwareSvg}>
                      <rect width="511.45" height="498.66" rx="90.57" />
                      <path d="M247.84,299.26H168.58l-16.12,50.09a4,4,0,0,1-4.12,3.09H108.2q-3.44,0-2.4-3.78L174.42,151q1-3.09,2.06-7a74.51,74.51,0,0,0,1.37-13.9,2.11,2.11,0,0,1,1.8-2.4,2,2,0,0,1,.6,0H234.8c1.6,0,2.51.57,2.75,1.71L315.43,349c.69,2.28,0,3.43-2.06,3.43h-44.6a3.17,3.17,0,0,1-3.43-2.4ZM180.94,256h54.2q-2.05-6.87-4.8-15.44t-5.83-18.36l-6.18-19.55q-3.09-9.78-5.66-18.88T208,167.17h-.34a276.76,276.76,0,0,1-7.21,27.44q-4.8,15.45-9.78,31.57T180.94,256Z" />
                      <path d="M361.74,164.08a24.9,24.9,0,0,1-18.87-7.55,27.12,27.12,0,0,1-7.2-19.56,25.17,25.17,0,0,1,7.72-19,26.52,26.52,0,0,1,19-7.38q12.35,0,19.38,7.38a26.52,26.52,0,0,1,7,19,26.78,26.78,0,0,1-7.38,19.56A26.32,26.32,0,0,1,361.74,164.08ZM338.07,349V185c0-2.06.91-3.09,2.74-3.09H383c1.82,0,2.74,1,2.74,3.09V349c0,2.28-.91,3.43-2.74,3.43H341.16C339.1,352.44,338.07,351.29,338.07,349Z" />
                    </svg>
                  ) : software.id === "id" ? (
                    <svg viewBox="0 0 512 512" className={styles.softwareSvg}>
                      <path d="M90.666 16h330.666C471.465 16 512 56.533 512 106.666v317.866c0 50.134-40.534 90.667-90.667 90.667H90.666C40.533 515.199 0 474.666 0 424.532V106.666C0 56.533 40.533 16 90.666 16z" />
                      <path d="M186.026 146.56v219.732c0 2.347-1.066 3.414-2.986 3.414h-41.814c-1.92 0-2.773-1.067-2.773-3.414V146.56c0-1.92 1.067-2.774 2.987-2.774h41.6c1.28-.213 2.56.64 2.773 2.134.213.213.213.426.213.64zM309.333 372.266c-15.787.213-31.574-2.987-45.867-9.6-13.44-6.187-24.533-16.427-32.213-29.013-7.894-13.014-11.734-29.227-11.734-48.64a87.617 87.617 0 0111.734-45.014c8.106-13.866 19.84-25.386 33.92-33.066 14.933-8.32 32.853-12.373 53.973-12.373 1.067 0 2.56 0 4.48.213 1.92.213 4.053.213 6.613.427v-67.414c0-1.493.64-2.346 2.134-2.346h43.306c1.067-.214 1.92.64 2.133 1.493v203.52c0 3.84.214 8.106.427 12.8.427 4.48.64 8.746.853 12.373 0 1.493-.64 2.773-2.133 3.413-11.093 4.693-22.827 8.107-34.773 10.24-10.667 1.92-21.76 2.987-32.853 2.987zm20.906-42.667v-93.866c-1.92-.427-3.84-.854-5.76-1.067-2.346-.213-4.693-.427-7.04-.427-8.32 0-16.64 1.707-24.106 5.547a47.825 47.825 0 00-18.134 15.787c-4.693 6.826-7.04 16-7.04 27.093-.213 7.467 1.067 14.933 3.627 21.973 2.133 5.76 5.333 10.88 9.6 15.147 4.053 3.84 8.96 6.827 14.507 8.533 5.76 1.92 11.733 2.774 17.706 2.774 3.2 0 6.187-.214 8.96-.427a18.166 18.166 0 007.68-1.067z" />
                    </svg>
                  ) : (
                    software.label
                  )}
                </span>
              ))}
            </div>
            <span className={styles.softwareLabel}>Softwares</span>
          </div>
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
