import styles from "../styles/About.module.sass";

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <h1>Aulya Thareeq Pravantawidya</h1>
      <p>What's up?</p>
      <p>
        <span>
          {" "}
          <a className={styles.footerName} href="https://github.com/kshaultrya/" target="_blank">
            {" "}
            Click here for more info!
          </a>
        </span>{" "}
      </p>
    </div>
  );
}
