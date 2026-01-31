import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src="/InhaleVapeLogo.png"
          alt="Inhale NZ Logo"
          width={500*2}
          height={250*2}
          priority          
        />
      </div>
      <nav className={styles.mainNav}>
        <Link href="/products" className={styles.navButton}>Products</Link>
        <Link href="/location" className={styles.navButton}>Location</Link>
      </nav>
    </main>
  );
}