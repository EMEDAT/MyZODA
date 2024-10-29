import React from 'react';
import styles from '../styles/Features.module.scss';

const Features: React.FC = () => {
  return (
    <section className={styles.features}>
      <h2>Features</h2>
      <p className={styles.subText}>
        Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
      </p>
      <div className={styles.featureList}>
        <div className={styles.feature}>
          <img src="/assets/ic_round-restaurant-menu.png" alt="Icon 1" />
          <h3>A Single Source of Truth</h3>
          <p>When you add work to your Slate calender we automatically calculate useful insights</p>
        </div>
        <div className={styles.feature}>
          <img src="/assets/mdi_alien-outline.png" alt="Icon 2" />
          <h3>Intuitive Interface</h3>
          <p>When you add work to your Slate calender we automatically calculate useful insights</p>
        </div>
        <div className={styles.feature}>
          <img src="/assets/mdi_all-inclusive.png" alt="Icon 3" />
          <h3>Or with rules</h3>
          <p>When you add work to your Slate calender we automatically calculate useful insights</p>
        </div>
      </div>
    </section>
  );
};

export default Features;