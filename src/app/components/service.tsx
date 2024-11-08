import { FaCode, FaPalette, FaFigma } from 'react-icons/fa';  
import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <section className={styles.services} id="Services">
      <div className={styles.header}>
        <h2>Services</h2>
        <p>Explore the services we offer for your next big project!</p>
      </div>

      <div className={styles.servicesContainer}>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <FaCode size={40} />
          </div>
          <h3>Web Developer</h3>
          <p>We create custom websites that are fast, responsive, and scalable, tailored to your business needs.</p>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <FaPalette size={40} />
          </div>
          <h3>Web Designer</h3>
          <p>Our design team ensures a seamless user experience with beautiful and functional designs.</p>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.icon}>
            <FaFigma size={40} />
          </div>
          <h3>Figma Designer</h3>
          <p>We design modern user interfaces and experiences using Figma, bringing your ideas to life with precision.</p>
        </div>
      </div>
    </section>
  );
}
