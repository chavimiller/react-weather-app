import SearchBar from "./SearchBar";
import WeatherDetail from "./WeatherDetail";
import styles from "./WeatherOverview.module.css";

const WeatherOverview = () => {
  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.bgImage}></div>
        <div className={styles.topInfo}>
          <SearchBar />
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
      </div>
    </>
  );
};

export default WeatherOverview;
