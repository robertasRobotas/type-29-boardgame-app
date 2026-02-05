import styles from "./styles.module.css";
import burgerImg from "../../assets/img/burder-btn.svg";
import { useState } from "react";

const Header = () => {
  console.log(burgerImg);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = (
    <ul>
      <li>
        <a href="">link 1</a>
      </li>
      <li>
        <a href="">link 1</a>
      </li>
      <li>
        <a href="">link 1</a>
      </li>
      <li>
        <a href="">link 1</a>
      </li>
      <li>
        <a href="">link 1</a>
      </li>
    </ul>
  );

  return (
    <>
      <header className={styles.header}>
        <div>Logo</div>
        <nav>{links}</nav>

        <button
          className={styles.burgerBtn}
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <img src={burgerImg.src} />
        </button>
      </header>

      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayPosition : styles.overlayPositionHidden}`}
      >
        <nav className={styles.mobileNav}>{links}</nav>
      </div>
    </>
  );
};

export default Header;
