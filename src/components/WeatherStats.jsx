import styles from "./WeatherStats.module.css";

export const WeatherStats = ({ title, symbol, number, unit = null }) => {
  return (
    <>
      <div className={styles.statGroup}>
        <div className={styles.titleLine}>
          <div className={styles.statSymbol}>{symbol}</div>
          <div className={styles.statTitle}>{title}</div>
        </div>

        <div className={styles.circleFrame}>
          <div className={styles.statNumber}>
            {number + (unit !== null ? unit : "")}
          </div>
        </div>
      </div>
    </>
  );
};
