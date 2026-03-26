import styles from "./Reviews.module.css";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Graphic Design Student",
    title: "Great learning experience at Imazine Us.",
    quote:
      "I learned Photoshop, Illustrator, and video editing with practical projects. Highly recommended.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Mehta",
    role: "Graphic Design Student",
    title: "The teachers explain everything very clearly.",
    quote:
      "I improved my graphic design skills a lot in just a few months.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Riya Kapoor",
    role: "Beginner Student",
    title: "Imazine Us is perfect for beginners.",
    quote: "Friendly environment and very supportive mentors.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Karan Verma",
    role: "Graphic + Video Editing Student",
    title: "The Graphic + Video Editing course is very practical.",
    quote: "I learned real skills that help in freelance work.",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Neha Arora",
    role: "Graphic Designing Student",
    title: "Amazing institute for learning graphic designing.",
    quote:
      "The assignments and projects helped me build confidence.",
    avatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sanya Gill",
    role: "Professional Training Student",
    title: "I joined with basic knowledge and now I can design posts.",
    quote:
      "I can edit videos professionally now too. Great experience.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
];

function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>What People Say</h2>

        <p className={styles.summary}>
          Real stories from real people. See how my designs have transformed
          and elevated businesses, and created lasting impressions.
        </p>
      </div>

      <div className={styles.grid}>
        {reviews.map((review) => (
          <article key={review.name} className={styles.card}>
            <div className={styles.cardTop}>
              <img className={styles.avatar} src={review.avatar} alt={review.name} />
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
