import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.homeContent}>
        <h1>Hi 👋 I'm Areeba</h1>
        <div className={styles.textChange}>
          <h3>And I'm</h3>
          <h3>
            <span className={styles.word}>Frontend Developer</span>
          </h3>
        </div>
        <div className={styles.btnBox}>
          <a href="#about" className={styles.btn}>Know more!</a>
        </div>
      </div>
    </section>
  );
}
