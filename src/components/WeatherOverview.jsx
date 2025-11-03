import WeatherDetail from "./WeatherDetail";
import styles from "./WeatherOverview.module.css";
const WeatherOverview = () => {
  return (
    <>
      <div className={styles.bgImage}>
        <div className={`${styles.infoContainer} section container`}>
          <div className={styles.tempNumber}>
            20<span className={styles.superScript}>°C</span>
          </div>
          <div className={styles.feelsLike}>
            Feels like 17<span className={styles.superScript}>°C</span>
          </div>
          <div className={styles.bottomLine}>
            <div className={styles.wordDesc}>Sunny</div>
            <div className={styles.location}>Jerusalem, Israel</div>
          </div>
        </div>
        <div className={styles.weatherDetailBox}>
          <WeatherDetail />
        </div>
      </div>
    </>
  );
};

export default WeatherOverview;
