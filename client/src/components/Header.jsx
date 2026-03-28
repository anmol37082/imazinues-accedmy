import { useEffect, useRef, useState } from "react";
import "./Header.css";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#blog", label: "Blog" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact-us", label: "Contact Us" },
];

function scrambleLabel(label) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return label
    .split("")
    .map((char) => {
      if (char === " ") {
        return " ";
      }

      return chars[Math.floor(Math.random() * chars.length)];
    })
    .join("");
}

function HoverText({ label }) {
  const [displayLabel, setDisplayLabel] = useState(label);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setDisplayLabel(label);
  }, [label]);

  useEffect(() => {
    return () => {
      window.clearInterval(intervalRef.current);
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    window.clearInterval(intervalRef.current);
    window.clearTimeout(timeoutRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayLabel(scrambleLabel(label));
    }, 90);

    timeoutRef.current = window.setTimeout(() => {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
      setDisplayLabel(label);
    }, 1400);
  };

  const handleMouseLeave = () => {
    window.clearInterval(intervalRef.current);
    window.clearTimeout(timeoutRef.current);
    intervalRef.current = null;
    setDisplayLabel(label);
  };

  return (
    <span
      className="hover-text"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayLabel.split("").map((char, index) => (
        <span
          key={`${label}-${index}`}
          className={`hover-char${char === " " ? " is-space" : ""}`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/ImazineUsAcademyLogo.png" alt="Imazine Us" />
        </div>

        <div className="right">
          <button className="btn headerButton">
            <span className="btnLabel">BOOK A CALL</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="btn-icon"
            >
              <g opacity="1">
                <circle cx="10.2004" cy="7.1999" r="1.8" fill="currentColor" />
                <circle cx="10.2004" cy="16.8" r="1.8" fill="currentColor" />
                <circle cx="14.9992" cy="12.0002" r="1.8" fill="currentColor" />
              </g>
            </svg>
          </button>
          <button
            className={`menuToggle${isMenuOpen ? " menuToggleOpen" : ""}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`menuBackdrop${isMenuOpen ? " menuBackdropOpen" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside className={`sideMenu${isMenuOpen ? " sideMenuOpen" : ""}`}>
        <ul className="sideMenuList">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                <HoverText label={item.label} />
              </a>
            </li>
          ))}
        </ul>

        <button className="btn mobileDrawerButton">
          <span className="btnLabel">BOOK A CALL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="btn-icon"
          >
            <g opacity="1">
              <circle cx="10.2004" cy="7.1999" r="1.8" fill="currentColor" />
              <circle cx="10.2004" cy="16.8" r="1.8" fill="currentColor" />
              <circle cx="14.9992" cy="12.0002" r="1.8" fill="currentColor" />
            </g>
          </svg>
        </button>
      </aside>
    </>
  );
}

export default Header;
