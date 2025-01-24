import React from "react";
import { Calendar, Mountain, Mountain as Mountain2, Route } from "lucide-react";
import styles from "./TrekStatsContainer.module.css";

const stats = [
  {
    icon: <Calendar size={24} color="white" />,
    label: "Duration",
    value: "3D/2N",
  },
  {
    icon: <Mountain size={24} color="white" />,
    label: "Difficulty",
    value: "Moderate",
  },
  {
    icon: <Mountain2 size={24} color="white" />,
    label: "Altitude",
    value: "12500 FT",
  },
  {
    icon: <Route size={24} color="white" />,
    label: "Trek Distance",
    value: "24 Km",
  },
];

export const TrekStats = () => {
  return (
    <div className={styles.statsContainer}>
      {stats.map((stat, index) => (
        <div key={stat.label} className={styles.statItem}>
          <div className={styles.icon}>{stat.icon}</div>
          <div className={styles.info}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
