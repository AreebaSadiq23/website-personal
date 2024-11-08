import styles from '../styles/Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://github.com/AreebaSadiq23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/areeba-sadiq-05a499315/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>&copy; 2024 All rights reserved. Areeba Sadiq</p>
    </footer>
  );
}
