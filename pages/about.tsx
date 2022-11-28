import styles from "../styles/About.module.sass";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About project</h1>
      <p>DigiLoader is an App built on Next.js to query Digimons.</p>
    </div>
  );
}
