import styles from "../../styles/Footer.module.sass";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>
          DigiLoader by{" "}
          <a className={styles.footerName} href="https://github.com/kshaultrya/" target="_blank">
            {" "}
            Luey
          </a>
        </span>{" "}
        &copy; 2022
      </p>
    </footer>
  );
}
