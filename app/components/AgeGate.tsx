"use client";

import { useEffect, useState } from "react";
import styles from "./AgeGate.module.css";

export default function AgeGate() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("age_verified");
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem("age_verified", "true");
    setIsOpen(false);
  };

  const handleNo = () => {
    window.location.href = "https://google.com"; // or your safe redirect
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>ARE YOU OVER 18?</h2>
        <p className={styles.text}>You must be 18 or older to enter this site.</p>
        <div className={styles.buttonContainer}>
          <button onClick={handleYes} className={`${styles.baseButton} ${styles.yesButton}`}>
            YES
          </button>
          <button onClick={handleNo} className={`${styles.baseButton} ${styles.noButton}`}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}
