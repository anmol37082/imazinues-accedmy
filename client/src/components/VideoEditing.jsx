import { useRef } from "react";
import styles from "./VideoEditing.module.css";

const softwareIcons = [
  { 
    id: "pr", 
    label: "Premiere Pro", 
    tone: styles.premiereIcon 
  },
  { 
    id: "ae", 
    label: "After Effects", 
    tone: styles.afterEffectsIcon 
  },
  { 
    id: "capcut", 
    label: "CapCut", 
    tone: styles.capcutIcon 
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
                    // ✅ Premiere Pro SVG (1st position)
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 512.84 500.01"
                      className={styles.softwareSvg}
                    >
                      <defs>
                        <style>
                          {`.pr-a{fill:#00005b;}.pr-b{fill:#99f;}`}
                        </style>
                      </defs>
                      <title>adobe-premiere-pro</title>
                      <path className="pr-a" d="M90.81,0H422a90.74,90.74,0,0,1,90.82,90.81V409.2A90.73,90.73,0,0,1,422,500H90.81A90.73,90.73,0,0,1,0,409.2V90.81A90.74,90.74,0,0,1,90.81,0Z"/>
                      <path className="pr-b" d="M121.8,350.65V130.77c0-1.49.64-2.35,2.14-2.35,3.63,0,7.05,0,12-.21,5.13-.21,10.47-.21,16.24-.43s12-.21,18.59-.43,13-.21,19.45-.21c17.52,0,32,2.14,44,6.62a76.35,76.35,0,0,1,28.64,17.53,67.94,67.94,0,0,1,15.6,24.36,81.86,81.86,0,0,1,4.91,27.77q0,27.57-12.82,45.52A73.2,73.2,0,0,1,236.12,275c-14.53,5.34-30.56,7.26-48.08,7.26-5.13,0-8.55,0-10.68-.21s-5.13-.21-9.19-.21v68.59a2.66,2.66,0,0,1-2.35,3H124.36C122.65,353.43,121.8,352.57,121.8,350.65Zm46.58-181v71.8c3,.21,5.77.43,8.33.43H188A79.61,79.61,0,0,0,212.61,238a36.71,36.71,0,0,0,17.52-11.32c4.49-5.35,6.63-12.61,6.63-22a35.19,35.19,0,0,0-4.92-19,31,31,0,0,0-15-12.18,62.55,62.55,0,0,0-25.22-4.27c-5.55,0-10.47,0-14.53.21a49.8,49.8,0,0,0-8.76.21Z"/>
                      <path className="pr-b" d="M313.26,182.06h37.39a4.8,4.8,0,0,1,4.49,3.42,21.39,21.39,0,0,1,1.28,5.34c.43,2.13.86,4.48,1.07,6.62.21,2.35.43,4.92.43,7.69a79.63,79.63,0,0,1,22.86-18.37,66.17,66.17,0,0,1,32.48-8.34,2.66,2.66,0,0,1,3,2.35V223.3c0,1.71-1.07,2.35-3.42,2.35a92.62,92.62,0,0,0-23.08,2.13,88.75,88.75,0,0,0-17.94,5.77,33.3,33.3,0,0,0-10.9,7.91v109c0,2.13-.86,3-2.78,3H316a3,3,0,0,1-3.41-2.57V231.63c0-5.13,0-10.47-.22-16s-.21-11.11-.43-16.66c0-4.92-.42-9.62-.85-14.53a2,2,0,0,1,1.5-2.35c0-.22.42-.22.64,0Z"/>
                    </svg>
                  ) : software.id === "ae" ? (
                    // ✅ After Effects SVG (2nd position)
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 512.47 499.66"
                      className={styles.softwareSvg}
                    >
                      <defs>
                        <style>
                          {`.ae-a{fill:#00005b;}.ae-b{fill:#99f;}`}
                        </style>
                      </defs>
                      <title>adobe-after-effects</title>
                      <rect className="ae-a" width="512.47" height="499.66" rx="90.75"/>
                      <path className="ae-b" d="M205.88,298.94H126.46L110.3,349.23a4,4,0,0,1-4.12,3.1H66c-2.29,0-3.09-1.27-2.4-3.79l68.76-197.2c.68-2.06,1.37-4.08,2.06-6.71a73.17,73.17,0,0,0,1.37-13.93,2.13,2.13,0,0,1,1.81-2.4,2,2,0,0,1,.6,0h54.66c1.6,0,2.52.57,2.75,1.72l78,218.87q1,3.44-2.06,3.44H226.85a3.19,3.19,0,0,1-3.44-2.41Zm-67-42.4h54.32q-2.07-6.87-4.82-15.47t-5.84-18.39l-6.19-19.6q-3.09-9.79-5.67-18.91T166,167.5h-.35a274.49,274.49,0,0,1-7.22,27.5q-4.81,15.48-9.8,31.63T138.84,256.54Z"/>
                      <path className="ae-b" d="M400.12,279.37H332.39a48.27,48.27,0,0,0,6.53,18.94,35.4,35.4,0,0,0,15.64,12.89,65.36,65.36,0,0,0,27.34,5.36,123.33,123.33,0,0,0,22.17-2.44,81.58,81.58,0,0,0,19.06-5q1.72-1.36,1.72,1.72v32.66a4.15,4.15,0,0,1-2.06,4.13,87.51,87.51,0,0,1-21.3,6.34,150.47,150.47,0,0,1-30.25,2.58q-24.42,0-40.91-7.56a73,73,0,0,1-26.82-20.28,79.6,79.6,0,0,1-14.78-28,110.41,110.41,0,0,1-4.47-31.12,108.47,108.47,0,0,1,5.33-33.86,88.5,88.5,0,0,1,16-29.22,76.76,76.76,0,0,1,25.79-20.28c10.08-4.93,22-6.7,35.75-6.7a77.73,77.73,0,0,1,33.18,6.54,58.37,58.37,0,0,1,22.51,17,78,78,0,0,1,12.72,24.24,86.45,86.45,0,0,1,4.13,26.13q0,7.56-.52,13.75c-.34,4.12-.63,7.1-.85,8.94a3.13,3.13,0,0,1-3.1,2.75q-2.06,0-7.05.51c-3.32.35-7.45.57-12.37.69S405.62,279.37,400.12,279.37Zm-67.73-31.32h45q8.25,0,12.2-.17a12.13,12.13,0,0,0,5-1.65v-2.07a27.6,27.6,0,0,0-1.38-7.9,28.08,28.08,0,0,0-27.85-19.6A29.88,29.88,0,0,0,337,232.82,49.88,49.88,0,0,0,332.39,248.05Z"/>
                    </svg>
                  ) : software.id === "capcut" ? (
                    // ✅ NAYI CapCut SVG (3rd position - Last)
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      shapeRendering="geometricPrecision" 
                      textRendering="geometricPrecision" 
                      imageRendering="optimizeQuality" 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      viewBox="0 0 512 509.659"
                      className={styles.softwareSvg}
                    >
                      <path fill="#fff" d="M116.971 2.475h278.058c62.971 0 114.494 51.522 114.494 114.494v275.722c0 62.971-51.523 114.493-114.494 114.493H116.971c-62.972 0-114.494-51.522-114.494-114.493V116.969c0-62.972 51.522-114.494 114.494-114.494z"/>
                      <path fill="#999" fillRule="nonzero" d="M116.97-.001h278.06C459.366-.001 512 52.633 512 116.969v275.722c0 64.335-52.634 116.969-116.97 116.969H116.97C52.636 509.66 0 457.026 0 392.691V116.969C0 52.633 52.636-.001 116.97-.001zm278.06 4.953H116.97C55.364 4.952 4.953 55.363 4.953 116.969v275.722c0 61.605 50.411 112.017 112.017 112.017h278.06c61.607 0 112.017-50.411 112.017-112.017V116.969c0-61.607-50.41-112.017-112.017-112.017z"/>
                      <path fill="#fff" fillRule="nonzero" d="M109.095 181.505c-.123 8.897 0 17.813 0 26.71a5.41 5.41 0 003.225 4.917 23898.407 23898.407 0 0084.108 41.646c-27.832 13.672-55.563 27.526-83.353 41.259a5.938 5.938 0 00-4.081 4.876v26.771c1.854 18.195 15.823 32.817 33.913 35.503 3.509.326 7.02.266 10.529.266l155.85.001a45.08 45.08 0 0011.224-.92 40.825 40.825 0 0026.137-20.015 63.699 63.699 0 004.288-11.226c15.997 8.325 32.341 16.079 48.462 24.179.385.291.857.447 1.343.447a2.266 2.266 0 002.265-2.265v-.016-27.669a4.695 4.695 0 00-3.143-4.079l-135.323-67.112c45.203-22.431 90.412-44.876 135.63-67.335a4.573 4.573 0 002.754-4.082v-27.628a2.183 2.183 0 00-3.142-1.673l-49.135 24.363a42.189 42.189 0 00-6.388-14.917 40.613 40.613 0 00-30.097-17.422l-167.133-.001c-19.615.91-35.688 15.918-37.933 35.424v-.002z"/>
                      <path fill="#fff" fillRule="nonzero" d="M140.049 181.689a10.082 10.082 0 019.345-5.55h161.545l.106-.001c5.066 0 9.368 3.72 10.096 8.734.205 2.714.102 5.428 0 8.162l-90.597 44.891c-30.608-15.018-61.03-30.22-91.535-45.339.142-3.632-.633-7.53 1.04-10.897zM139.009 317.095a24846.007 24846.007 0 0191.351-45.319c30.322 14.773 60.521 29.954 90.802 44.89-.204 3.918.755 8.162-1.305 11.773a10.085 10.085 0 01-8.755 5.08h-.082l-161.605.002-.277.002a10.202 10.202 0 01-9.007-5.411c-1.796-3.386-.98-7.345-1.122-11.017z"/>
                      <path fillRule="nonzero" d="M109.095 181.505c2.223-19.532 18.316-34.578 37.955-35.483l167.194-.001a40.612 40.612 0 0130.095 17.427 42.152 42.152 0 016.39 14.915l49.135-24.364a2.185 2.185 0 013.141 1.674v27.628l.001.096a4.571 4.571 0 01-2.837 4.229 177620.936 177620.936 0 00-135.63 67.336l135.324 66.948a4.695 4.695 0 013.142 4.08v27.685a2.266 2.266 0 01-3.613 1.821c-16.12-8.162-32.464-15.854-48.462-24.18a63.503 63.503 0 01-4.282 11.225 40.813 40.813 0 01-26.098 20.135 44.994 44.994 0 01-11.221.919l-155.833.003c-3.51 0-7.04 0-10.53-.266-18.089-2.705-32.049-17.363-33.869-35.565v-26.77a5.935 5.935 0 014.08-4.879c27.791-13.732 55.521-27.587 83.353-41.258a32412.61 32412.61 0 00-84.17-41.748 5.41 5.41 0 01-3.223-4.918c-.042-8.876-.185-17.792-.042-26.689zm30.975.184c-1.674 3.367-.898 7.263-1.041 10.896 30.608 15.12 60.99 30.321 91.536 45.339 30.185-14.963 60.384-29.927 90.596-44.89 0-2.714.123-5.428 0-8.162a10.203 10.203 0 00-10.096-8.734h-.106l-161.565.001a10.082 10.082 0 00-9.345 5.55h.021zm-1.041 135.406c.142 3.673-.654 7.631 1.122 11.039a10.204 10.204 0 009.284 5.405l161.667.002.081-.001c3.618 0 6.961-1.94 8.754-5.081 2.04-3.57 1.102-7.855 1.305-11.773-30.26-14.936-60.48-30.118-90.801-44.89a43915.126 43915.126 0 00-91.432 45.299h.02z"/>
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