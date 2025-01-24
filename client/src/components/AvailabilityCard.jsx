import React from "react";
// import { Button } from "antd";
import { ArrowRight } from "lucide-react";
import styles from "./AvailabilityCard.module.css";

const months = ["Jan", "Feb", "Mar", "Apr", "May"];

const batches = [
  { number: 1, dates: "Jan 17 - 20", status: "Booked" },
  { number: 2, dates: "Jan 17 - 20", status: "Filling Fast" },
  { number: 3, dates: "Jan 17 - 20", status: "Filling Fast" },
  { number: 4, dates: "Jan 17 - 20", status: "Available" },
];

const locations = [
  { from: "Chopta", to: "Chopta", duration: "3D/2N", price: 3000 },
  { from: "Delhi", to: "Delhi", duration: "3D/2N", price: 6500 },
  { from: "Rishikesh", to: "Rishikesh", duration: "3D/2N", price: 4800 },
];

const StatusIndicator = ({ status }) => {
  const statusClass = status.toLowerCase().replace(/\s+/g, "");
  return <div className={`${styles.statusDot} ${styles[statusClass]}`} />;
};

export const AvailabilityCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Availability</h2>

      {/* Status Legend */}
      <div className={styles.legend}>
        {["Available", "Filling Fast", "Booked"].map((status) => (
          <div key={status} className={styles.legendItem}>
            <StatusIndicator status={status} />
            <span>{status}</span>
          </div>
        ))}
      </div>

      {/* Months */}
      <div className={styles.monthsContainer}>
        {months.map((month) => (
          <button key={month} className={styles.monthButton}>
            {month}
          </button>
        ))}
      </div>

      {/* Batches */}
      <div className={styles.batchesGrid}>
        {batches.map((batch) => {
          const statusClass = batch.status.toLowerCase().replace(/\s+/g, "");
          return (
            <div
              key={batch.number}
              className={`${styles.batchCard} ${styles[statusClass]}`}
            >
              <div className={styles.batchHeader}>
                <StatusIndicator status={batch.status} />
                <span className={styles.batchNumber}>Batch {batch.number}</span>
              </div>
              <span className={styles.batchDates}>{batch.dates}</span>
            </div>
          );
        })}
      </div>

      {/* Locations */}
      <div>
        {locations.map((location) => (
          <div
            key={`${location.from}-${location.to}`}
            className={styles.locationCard}
          >
            <div className={styles.locationInfo}>
              <div className={styles.duration}>{location.duration}</div>
              <div className={styles.route}>
                {location.from} - {location.to}
              </div>
            </div>
            <div className={styles.priceInfo}>
              <div className={styles.priceLabel}>Price</div>
              <div className={styles.price}>
                ₹{location.price.toLocaleString()}/person
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <button type="primary" className={styles.bookButton}>
        <span>Book Now @₹500/Person</span>
        <ArrowRight size={18} />
      </button>
      <p className={styles.disclaimer}>
        *pending amount to be paid before departure
      </p>
    </div>
  );
};
