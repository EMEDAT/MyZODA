import styles from '../styles/Footer.module.scss';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <div className={styles.column}>
          <h3>Fingertipe</h3>
          <div className={styles.list}>
            <div className={styles.links}>
              <a href="#">Home</a>
              <a href="#">Examples</a>
              <a href="#">Pricing</a>
              <a href="#">Updates</a>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Resources</h3>
          <div className={styles.list}>
            <div className={styles.links}>
              <a href="#">Home</a>
              <a href="#">Examples</a>
              <a href="#">Pricing</a>
              <a href="#">Updates</a>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h3>About</h3>
          <div className={styles.list}>
            <div className={styles.links}>
              <a href="#">Home</a>
              <a href="#">Examples</a>
              <a href="#">Pricing</a>
              <a href="#">Updates</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.block}>
          <FaMapMarkerAlt size={24} color="#FFFFFF" />
          <div className={styles.text}>7480 Mockingbird Hill undefined</div>
        </div>
        <div className={styles.block}>
          <MdPhoneAndroid size={24} color="#FFFFFF" />
          <div className={styles.text}>(239) 555-0108</div>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a href="#"><FaTwitter size={24} color="#FFFFFF" /></a>
        <a href="#"><FaFacebookF size={24} color="#FFFFFF" /></a>
        <a href="#"><FaLinkedinIn size={24} color="#FFFFFF" /></a>
      </div>
    </footer>
  );
}