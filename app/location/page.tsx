import Link from "next/link";
import styles from "./location.module.css";

export default function Location() {
  return (
    <main className={styles.locationMain}>
      <div className={styles.header}>
        <a href="/" className={styles.backLink}>← Back</a>
        <h1 className={styles.title}>Location</h1>
      </div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <h2 className={styles.sectionTitle}>Address</h2>
            <p className={styles.infoText}>73A Briggs Road, Shirley</p>
            <p className={styles.infoText}>Christchurch, 8052</p>
            <p className={styles.infoText}>New Zealand</p>
          </div>

          <div className={styles.infoBlock}>
            <h2 className={styles.sectionTitle}>Hours</h2>
            <div className={styles.hoursGrid}>
              <span className={styles.dayLabel}>Monday - Friday</span>
              <span className={styles.timeLabel}>9:00 AM - 7:00 PM</span>
              
              <span className={styles.dayLabel}>Saturday - Sunday</span>
              <span className={styles.timeLabel}>10:00 AM - 6:00 PM</span>
              
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.infoText}>Phone: what number</p>
            <p className={styles.infoText}>Email: raewyns email</p>
          </div>
        </div>

        <div className={styles.mapSection}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.845!2d172.6655!3d-43.5057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318bfe66440001%3A0x1!2s73A%20Briggs%20Road%2C%20Shirley%2C%20Christchurch%208052!5e0!3m2!1sen!2snz!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Inhale Vape NZ Location Map"
                    className={styles.map}
                  />
                </div>
              </div>
    </main>
  );
}