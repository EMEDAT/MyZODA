import React from 'react';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Navbar Section */}
      <div className={styles.navbar}>
        <span className={styles.navTitle}>Xplora.io</span>
        <div className={styles.menuIcon}>
          <div className={styles.vectorLine}></div>
          <div className={styles.vectorLine}></div>
          <div className={styles.vectorLine}></div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className={styles.introContainer}>
        <div className={styles.gradientLine1} />
        <span className={styles.introducingText}>Introducing</span>
        <div className={styles.gradientLine2} />
      </div>

      {/* Hero Section */}
      <h1 className={styles.title}>Xplora.io</h1>
      <p className={styles.subtitle}>
        <span className={styles.whiteText}>Analyze your data, create your</span><br />
        <span className={styles.blueText}>dashboard, and unite your team</span>
      </p>
      <button className={styles.getStartedButton}>Get Started</button>
    </header>
  );
};

export default Header;