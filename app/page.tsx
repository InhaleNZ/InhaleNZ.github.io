import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/InhaleVapeLogo.png"
          alt="Inhale NZ Logo"
          width={500}
          height={250}
          priority          
        />
      </div>
      <nav className={styles.mainNav}>
        <a href="/products" className={styles.navButton}>Products</a>
        <a href="/location" className={styles.navButton}>Location</a>
      </nav>
    </main>
  );
}