import React from 'react';
import styles from '../styles/Partners.module.scss';

const Partners: React.FC = () => {
  return (
    <section className={styles.partners}>
      <h2>Partners</h2>
      <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className={styles.logoGrid}>
      <img src="/assets/logos_apple-app-store.png" alt="apple" />
        <img src="/assets/logos_apiary.png" alt="apiary" />
        <img src="/assets/logos_android-icon.png" alt="android" />
        <img src="/assets/logos_basecamp.png" alt="basecamp" />
        <img src="/assets/logos_airbnb.png" alt="airbnb" />
        <img src="/assets/logos_ibm.png" alt="ibm" />
      </div>
      <button className={styles.allPartnersButton}>All Partners</button>
    </section>
  );
};

export default Partners;