import styles from "./WeatherDetail.module.css";

const WeatherDetail = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.roundedBox}>
          <div className={styles.detailTitle}>Hourly Forecast</div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetail;
