import SearchBar from "./SearchBar";
import styles from "./WeatherOverview.module.css";
import { useWeather } from "../hooks/useWeather";
import { useWeatherContext } from "../context/WeatherContext";

const WeatherOverview = () => {
  const { weather, loading, error } = useWeatherContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error} </div>;
  if (!weather) return null;

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
