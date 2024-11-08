import styles from "../styles/Skills.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';

export default function Skills() {
  return (
    <section id="skills"className={styles.skillsSection}>
      <h2>My Skills</h2>
      <div className={styles.skillsContainer}>
        {/* HTML */}
        <div className={styles.skillCard}>
          <FaHtml5 size={50} color="salmon" />
          <h3>HTML</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '90%' }}></div>
          </div>
        </div>

        {/* CSS */}
        <div className={styles.skillCard}>
          <FaCss3Alt size={50} color="cyan" />
          <h3>CSS</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* JavaScript */}
        <div className={styles.skillCard}>
          <FaJsSquare size={50} color="yellow" />
          <h3>JavaScript</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '80%' }}></div>
          </div>
        </div>

        {/* React */}
        <div className={styles.skillCard}>
          <FaReact size={50} color="cyan" />
          <h3>React</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Node.js */}
        <div className={styles.skillCard}>
          <FaNodeJs size={50} color="darkgreen" />
          <h3>Node.js</h3>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
