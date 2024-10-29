import styles from '../styles/Testimonials.module.scss';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.testimonialList}>
        <div className={styles.testimonial}>
          <p>“Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year.”</p>
          <div className={styles.author}>
            <img src="/assets/Ellipse 2.png" alt="User 1" />
            <div>
              <h3>Claire Bell</h3>
              <span>Designer</span>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>“Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year.”</p>
          <div className={styles.author}>
            <img src="/assets/Ellipse 2 (1).png" alt="User 2" />
            <div>
              <h3>Ralph Fisher</h3>
              <span>Designer</span>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>“Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year.”</p>
          <div className={styles.author}>
            <img src="/assets/Ellipse 2.png" alt="User 1" />
            <div>
              <h3>Claire Bell</h3>
              <span>Designer</span>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <p>“Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Your financial goal for the month and year.”</p>
          <div className={styles.author}>
          <img src="/assets/Ellipse 2 (1).png" alt="User 2" />
            <div>
              <h3>Ralph Fisher</h3>
              <span>Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
