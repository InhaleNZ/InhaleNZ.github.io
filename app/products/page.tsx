import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import styles from './products.module.css';

export default function ProductsPage() {
  // Read logos folder (runs on server at build time or request)
  const logosDir = path.join(process.cwd(), 'public', 'logos');
  const files = fs.readdirSync(logosDir);
  
  const logos = files.filter(file =>
    /\.(png|jpe?g|svg|webp)$/i.test(file)
  );

  return (
    <main className={styles.productsMain}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.title}>Brands We Stock</h1>
      </div>

      <div className={styles.brandsGrid}>
        {logos.map((logoFile) => {
          const brandName = logoFile.replace(/\.(png|jpe?g|svg|webp)$/i, '');
          return (
            <div className={styles.brandCard} key={logoFile}>
              <Image
                src={`/logos/${logoFile}`}
                alt={`${brandName} Logo`}
                width={400}
                height={400}
                unoptimized={true}
                className={styles.brandLogo}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Our knowledgeable staff are ready to help you find the perfect product for your needs.
        </p>
        <Link href="/location" className={styles.visitButton}>
          Visit Our Store
        </Link>
      </div>
    </main>
  );
}