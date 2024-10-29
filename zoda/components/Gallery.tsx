import styles from '../styles/Gallery.module.scss';

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>GALLERY</h2>
      <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
      <div className={styles.imageGrid}>
        <img src="/assets/drone.png" alt="Drone" />
        <img src="/assets/headphone.png" alt="Headphone" />
        <img src="/assets/device.png" alt="Device" />
        <img src="/assets/laptop.png" alt="Laptop" />
      </div>
      <button className={styles.seeMoreButton}>See more</button>
    </section>
  );
}
