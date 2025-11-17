import SearchBar from "./SearchBar";
import styles from "./WeatherOverview.module.css";
import { useWeatherContext } from "../context/WeatherContext";
import { iconConditions } from "../utils/weatherImages";

const WeatherOverview = () => {
  const { weather, loading, error } = useWeatherContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error} </div>;
  if (!weather) return null;

  console.log(weather);

  const weatherImages = iconConditions;
  const match = weatherImages.find(
    (item) => item.icon === weather.currentConditions.icon
  );

  return (
    <>
      <div className={styles.infoContainer}>
        <div
          className={styles.bgImage}
          style={{
            backgroundImage: `url(${
              match?.url || "../assets/images/Default.png"
            })`,
          }}
        ></div>
        <div className={styles.topInfo}>
          <SearchBar />
          <div className={styles.tempNumber}>
            {weather.currentConditions.temp}
            <span className={styles.superScript}>°F</span>
          </div>
          <div className={styles.feelsLike}>
            Feels like {weather.currentConditions.feelslike}
            <span className={styles.superScript}>°F</span>
          </div>
          <div className={styles.bottomLine}>
            <div className={styles.wordDesc}>
              {weather.currentConditions.conditions}
            </div>
            <div className={styles.location}>{weather.address}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherOverview;
