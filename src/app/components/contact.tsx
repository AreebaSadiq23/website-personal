import React from 'react';
import styles from '../styles/Contact.module.css';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles['left-side']}>
          <div className={styles.details}>
            <FaMapMarkerAlt className={styles.icon} />
            <div className={styles.topic}>Address</div>
            <div className={styles['text-one']}>Karachi, Pakistan</div>
          </div>
          <div className={styles.details}>
            <FaEnvelope className={styles.icon} />
            <div className={styles.topic}>Email</div>
            <div className={styles['text-one']}>areebasadiq96@gmail.com</div>
          </div>
        </div>
        <div className={styles['right-side']}>
          <div className={styles['topic-text']}>Send us a message</div>
          <form action="#">
            <div className={styles['input-box']}>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className={styles['input-box']}>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className={`${styles['input-box']} ${styles['message-box']}`}>
              <textarea placeholder="Your message"></textarea>
            </div>
            <div className={styles.button}>
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
