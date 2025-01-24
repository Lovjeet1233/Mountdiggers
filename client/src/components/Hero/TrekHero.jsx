import React from "react";
import styles from "./TrekHero.module.css";

export const TrekHero = ({ title, duration, price, imageUrl }) => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <div className={styles.badge}>{duration}</div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.priceContainer}>
            <div className={styles.label}>Starting From</div>
            <div className={styles.price}>₹{price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
