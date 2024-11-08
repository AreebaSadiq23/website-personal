import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <h1>Areeba...</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#Services">Service</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;