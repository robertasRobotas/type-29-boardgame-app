import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
