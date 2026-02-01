import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from "next";
import styles from './products.module.css';

export const metadata: Metadata = {
  title: "Brands We Stock",
  description:
    "Explore the premium vaping brands we stock at Inhale Vape NZ. Quality devices, e-liquids, and accessories from trusted brands. Visit our Christchurch store.",
  keywords: [
    "vape brands Christchurch",
    "vaping brands NZ",
    "e-liquid brands New Zealand",
    "vape devices brands",
    "premium vape brands",
  ],
  alternates: {
    canonical: "https://www.inhalevape.co.nz/products",
  },
  openGraph: {
    title: "Brands We Stock | Inhale Vape NZ",
    description:
      "Explore the premium vaping brands we stock at Inhale Vape NZ in Christchurch.",
    url: "https://www.inhalevape.co.nz/products",
  },
};

interface Brand {
  id: number;
  name: string;
  products: string[];
}

const brandsData: Brand[] = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), '/app/products/products.json'), 'utf-8')
);

export default function ProductsPage() {
  return (
    <main className={styles.productsMain}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.title}>Brands We Stock</h1>
      </div>

      <div className={styles.brandsGrid}>
        {brandsData.map((brand: Brand) => (
          <div key={brand.id} className={styles.brandCard}>
            <div className={styles.brandLogoWrapper}>
            </div>
            <h2 className={styles.brandName}>{brand.name}</h2>
            <ul className={styles.productList}>
              {brand.products.map((product: string, index: number) => (
                <li key={index} className={styles.productItem}>
                  {product}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          Can't find what you're looking for? Talk to our knowledgeable staff, as we might have it in stock.
        </p>
        <Link href="/location" className={styles.visitButton}>
          Visit Our Store
        </Link>
      </div>
    </main>
  );
}