import styles from "./HourlyData.module.css";

const HourlyData = ({ desc, degrees, time }) => {
  return (
    <>
      <div className={styles.hourlyGroup}>
        <div className={styles.description}>{desc}</div>
        <div className={styles.circleFrame}>
          <div className={styles.tempNumber}>{degrees}°</div>
        </div>
        <div className={styles.time}>{time}</div>
      </div>
    </>
  );
};

export default HourlyData;
