import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About Section */}
          <div className={styles.section}>
            <h4 className={styles.heading}>Imazinus Academy</h4>
            <p className={styles.text}>
              Leading creative training center offering professional courses in
              Graphic Designing, Video Editing, and Digital Marketing with
              expert instructors.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/imazineusacademy/" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instaIcon}`} title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="4.5" ry="4.5"/>
                  <path d="M16.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor"/>
                  <circle cx="12" cy="12" r="4.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/Imazine.Us.Academy" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.fbIcon}`} title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.list}>
              <li>
                <a href="#home" className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className={styles.link}>
                  Courses
                </a>
              </li>
              <li>
                <a href="#inquiry" className={styles.link}>
                  Enroll Now
                </a>
              </li>
              <li>
                <a href="#reviews" className={styles.link}>
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className={styles.section}>
            <h4 className={styles.heading}>Courses</h4>
            <ul className={styles.list}>
              <li>
                <span className={styles.link}>Graphic Designing</span>
              </li>
              <li>
                <span className={styles.link}>Video Editing</span>
              </li>
              <li>
                <span className={styles.link}>Digital Marketing</span>
              </li>
              <li>
                <span className={styles.link}>Web Development</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <h4 className={styles.heading}>Contact</h4>
            <div className={styles.contactInfo}>
              <p className={styles.text}>
                <strong>Location:</strong> Zirakpur, Punjab
              </p>
              <p className={styles.text}>
                <strong>Hours:</strong> Mon - Sat: 10 AM - 6 PM
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Imazinus Academy. All rights reserved.
          </p>
          <p className={styles.cta}>
            Ready to learn? <a href="#inquiry" className={styles.ctaLink}>Enroll today</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
