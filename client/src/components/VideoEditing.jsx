import { useRef } from "react";
import styles from "./VideoEditing.module.css";

const softwareIcons = [
  { 
    id: "pr", 
    label: "Premiere Pro", 
    tone: styles.premiereIcon 
  },
  { 
    id: "transition", 
    label: "Transitions", 
    tone: styles.transitionIcon 
  },
  { 
    id: "ae", 
    label: "After Effects", 
    tone: styles.afterEffectsIcon 
  },
];

const cards = [
  {
    id: 1,
    age: "Lecture 1",
    audience: "Lecture 5",
    title: "Introduction to Video Editing (Lecture 1–5)",
    description:
      "Basics of video editing, editing workflow, understanding interface & panels.",
    tint: "#d8ff2b",
    gradient: "linear-gradient(135deg, #d8ff2b, #a7ff0c)",
    art: "linear-gradient(180deg, #b8f2ff, #f9d0b7)",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    age: "Lecture 6",
    audience: "Lecture 10",
    title: "Media & Timeline Basics (Lecture 6–10)",
    description:
      "Importing files, sequence settings, timeline usage, clip arrangement.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #dcbcff, #f5d8f0)",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    age: "Lecture 11",
    audience: "Lecture 15",
    title: "Cutting & Trimming (Lecture 11–15)",
    description:
      "Basic cuts, trimming clips, splitting, smooth sequencing.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #83f4ef, #ffd7e7)",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    age: "Lecture 16",
    audience: "Lecture 20",
    title: "Transitions & Effects (Lecture 16–20)",
    description:
      "Applying transitions, basic effects, creating smooth visual flow.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #8be0ff, #eefcff)",
    image:
      "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    age: "Lecture 21",
    audience: "Lecture 25",
    title: "Audio Editing (Lecture 21–25)",
    description:
      "Audio syncing, sound effects, voice clarity, background music.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #ffe28d, #ffb8d2)",
    image:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    age: "Lecture 26",
    audience: "Lecture 30",
    title: "Text & Titles (Lecture 26–30)",
    description:
      "Creating titles, lower thirds, text animation basics.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #a0bcff, #e9d6ff)",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    age: "Lecture 31",
    audience: "Lecture 35",
    title: "Color Correction (Lecture 31–35)",
    description:
      "Color balancing, basic grading, improving visual quality.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #ffcf8d, #ffdfe5)",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    age: "Lecture 36",
    audience: "Lecture 40",
    title: "Speed & Motion (Lecture 36–40)",
    description:
      "Slow motion, fast cuts, time remapping techniques.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #ffb2b2, #fff0c8)",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    age: "Lecture 41",
    audience: "Lecture 45",
    title: "Advanced Editing (Lecture 41–45)",
    description:
      "Keyframing, masking basics, advanced effects.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #c3fba8, #d4f4ff)",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    age: "Lecture 46",
    audience: "Lecture 60",
    title: "Project & Export (Lecture 46–60)",
    description:
      "Working on real projects, editing for reels/ads, export settings, portfolio creation.",
    tint: "#f2eee5",
    gradient: "linear-gradient(135deg, #f2eee5, #ece4d8)",
    art: "linear-gradient(180deg, #fbd0ff, #dff6ff)",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
  },
];

function VideoEditing() {
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
                  {software.id === "pr" ? (
                    // Premiere Pro SVG (32x32)
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="46px" 
                      height="46px" 
                      viewBox="0 0 32 32" 
                      className={styles.softwareSvg}
                    >
                      <path 
                        d="M2 12.1333C2 8.58633 2 6.81283 2.69029 5.45806C3.29749 4.26637 4.26637 3.29749 5.45806 2.69029C6.81283 2 8.58633 2 12.1333 2H19.8667C23.4137 2 25.1872 2 26.5419 2.69029C27.7336 3.29749 28.7025 4.26637 29.3097 5.45806C30 6.81283 30 8.58633 30 12.1333V19.8667C30 23.4137 30 25.1872 29.3097 26.5419C28.7025 27.7336 27.7336 28.7025 26.5419 29.3097C25.1872 30 23.4137 30 19.8667 30H12.1333C8.58633 30 6.81283 30 5.45806 29.3097C4.26637 28.7025 3.29749 27.7336 2.69029 26.5419C2 25.1872 2 23.4137 2 19.8667V12.1333Z" 
                        fill="#00005B"
                      />
                      <path 
                        d="M8 21.7957V9.20796C8 9.12233 8.0351 9.0734 8.11701 9.0734C9.32624 9.0734 10.5349 9 11.7445 9C13.7071 9 15.8323 9.68403 16.5772 11.7769C16.7527 12.2907 16.8463 12.8167 16.8463 13.3672C16.8463 14.4192 16.6123 15.2877 16.1442 15.9728C14.8368 17.8864 12.5706 17.8567 10.5392 17.8567V21.7834C10.5551 21.8997 10.4579 21.9547 10.3637 21.9547H8.14042C8.04681 21.9547 8 21.9058 8 21.7957ZM10.5509 11.4344V15.5446C11.3564 15.6048 12.1992 15.6113 12.9731 15.3489C13.8275 15.0977 14.2954 14.3439 14.2954 13.4406C14.3192 12.6709 13.9077 11.9323 13.2072 11.6546C12.4426 11.3305 11.3763 11.3111 10.5509 11.4344Z" 
                        fill="#9999FF"
                      />
                      <path 
                        d="M18.4325 12.2119H20.4861C20.5993 12.213 20.701 12.2947 20.7309 12.4089C20.8814 12.7582 20.9 13.1795 20.9005 13.5566C21.2527 13.1279 21.6773 12.7708 22.1533 12.5029C22.6638 12.201 23.2425 12.0479 23.8289 12.0598C23.9263 12.0452 24.0124 12.1353 23.9985 12.237V14.6201C23.9985 14.7122 23.9355 14.758 23.8101 14.758C22.9409 14.6953 21.5877 14.91 20.9561 15.6246V21.821C20.9561 21.9392 20.9059 21.9983 20.8054 21.9983H18.6021C18.4939 22.0145 18.3984 21.9127 18.4137 21.8013V15.0731C18.4137 14.1716 18.4324 13.2429 18.3007 12.3498C18.2804 12.2676 18.3556 12.1912 18.4325 12.2119Z" 
                        fill="#9999FF"
                      />
                    </svg>
                  ) : software.id === "transition" ? (
                    // Transitions Icon (192x192)
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="46px" 
                      height="46px" 
                      viewBox="0 0 192 192" 
                      className={styles.softwareSvg}
                    >
                      <path 
                        stroke="#000000" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="12" 
                        d="M170 42 22 124v14c0 6.627 5.373 12 12 12h78c6.627 0 12-5.373 12-12v-9.5"
                      />
                      <path 
                        stroke="#000000" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="12" 
                        d="M170 150 22 68V54c0-6.627 5.373-12 12-12h78c6.627 0 12 5.373 12 12v9.5"
                      />
                    </svg>
                  ) : software.id === "ae" ? (
                    // After Effects SVG (32x32)
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="#000000" 
                      width="46px" 
                      height="46px" 
                      viewBox="0 0 32 32" 
                      version="1.1"
                      className={styles.softwareSvg}
                    >
                      <title>adobeaftereffects</title>
                      <path 
                        d="M26.684 17.023c-0.026 0.236-0.039 0.412-0.051 0.524-0.011 0.089-0.084 0.158-0.174 0.162l-0 0c-0.075 0-0.212 0.012-0.412 0.026-0.197 0.023-0.425 0.037-0.656 0.037-0.023 0-0.046-0-0.070-0l0.004 0c-0.287 0-0.588-0.050-0.911-0.050h-3.956c0.051 0.417 0.188 0.793 0.394 1.122l-0.007-0.012c0.221 0.333 0.531 0.592 0.897 0.745l0.013 0.005c0.45 0.198 0.976 0.313 1.527 0.313 0.025 0 0.050-0 0.075-0.001l-0.004 0c0.465-0.009 0.912-0.059 1.345-0.145l-0.049 0.008c0.414-0.054 0.789-0.155 1.143-0.298l-0.031 0.011c0.062-0.049 0.1-0.025 0.1 0.1v1.911c-0.002 0.054-0.012 0.105-0.027 0.152l0.001-0.004c-0.023 0.035-0.052 0.064-0.085 0.087l-0.001 0.001c-0.36 0.163-0.779 0.293-1.216 0.37l-0.032 0.005c-0.479 0.096-1.029 0.152-1.592 0.152-0.063 0-0.126-0.001-0.189-0.002l0.009 0c-0.048 0.001-0.104 0.002-0.161 0.002-0.806 0-1.574-0.161-2.274-0.453l0.039 0.014c-0.627-0.277-1.154-0.68-1.568-1.179l-0.006-0.007c-0.38-0.46-0.675-1.006-0.853-1.602l-0.008-0.033c-0.166-0.545-0.261-1.172-0.261-1.821 0-0.71 0.114-1.393 0.325-2.032l-0.013 0.046c0.213-0.658 0.532-1.227 0.943-1.718l-0.007 0.008c0.409-0.492 0.912-0.892 1.482-1.174l0.026-0.012c0.554-0.247 1.201-0.391 1.881-0.391 0.071 0 0.143 0.002 0.213 0.005l-0.010-0c0.031-0.001 0.068-0.001 0.105-0.001 0.662 0 1.291 0.143 1.857 0.4l-0.028-0.011c0.525 0.231 0.964 0.57 1.305 0.992l0.005 0.006c0.318 0.405 0.573 0.878 0.741 1.39l0.009 0.033c0.15 0.451 0.236 0.97 0.236 1.509 0 0.005 0 0.009-0 0.014v-0.001c0 0.299-0.012 0.562-0.024 0.799zM16.886 22.004h-2.608c-0.005 0-0.011 0.001-0.017 0.001-0.086 0-0.159-0.058-0.182-0.137l-0-0.001-1.023-2.995h-4.642l-0.948 2.945c-0.021 0.101-0.109 0.176-0.214 0.176-0.008 0-0.016-0-0.024-0.001l0.001 0h-2.346c-0.137 0-0.175-0.075-0.137-0.225l4.018-11.52c0.037-0.125 0.075-0.237 0.125-0.387 0.048-0.242 0.075-0.52 0.075-0.804 0-0.002 0-0.005 0-0.007v0c-0.001-0.005-0.001-0.010-0.001-0.016 0-0.060 0.043-0.11 0.1-0.121l0.001-0h3.232c0.087 0 0.15 0.037 0.162 0.1l4.555 12.791c0.037 0.137 0.001 0.201-0.125 0.201zM25.672 1.399h-19.343c-0.001 0-0.003 0-0.004 0-2.927 0-5.299 2.373-5.299 5.299 0 0.002 0 0.003 0 0.005v-0 18.594c0 0.001 0 0.003 0 0.004 0 2.927 2.373 5.299 5.299 5.299 0.002 0 0.003 0 0.005 0h19.343c0.001 0 0.003 0 0.004 0 2.927 0 5.299-2.373 5.299-5.299 0-0.002 0-0.003 0-0.005v0-18.594c0-0.001 0-0.003 0-0.004 0-2.927-2.373-5.299-5.299-5.299-0.002 0-0.003 0-0.005 0h0zM22.39 14.053c-0.029-0.002-0.064-0.003-0.098-0.003-0.676 0-1.263 0.382-1.557 0.942l-0.005 0.010c-0.138 0.261-0.235 0.564-0.273 0.886l-0.001 0.012h2.632c0.324 0 0.562 0 0.711-0.012 0.108-0.009 0.206-0.045 0.289-0.101l-0.002 0.001v-0.125c0-0 0-0.001 0-0.001 0-0.165-0.028-0.323-0.079-0.471l0.003 0.010c-0.218-0.672-0.838-1.149-1.57-1.149-0.018 0-0.035 0-0.053 0.001l0.003-0zM11.682 14.415c-0.125-0.387-0.237-0.761-0.362-1.148s-0.237-0.749-0.337-1.111c-0.1-0.349-0.187-0.674-0.275-0.973h-0.025c-0.135 0.651-0.281 1.191-0.455 1.718l0.031-0.108c-0.187 0.599-0.374 1.223-0.574 1.847-0.162 0.636-0.362 1.223-0.549 1.747h3.17c-0.075-0.262-0.175-0.574-0.287-0.899-0.112-0.337-0.225-0.699-0.337-1.073z"
                      />
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
          <span className={styles.titlePrimary}>Video Editing</span>
          <br />
          <span className={styles.titleSecondary}>
            All the sections cover in 3 months
          </span>
        </h2>
      </div>

      <div className={styles.infoRow}>
        <div className={styles.infoBox}>Classes: Mon - Fri</div>
        <div className={styles.infoBox}>Location: Zirakpur</div>
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

export default VideoEditing;