import SearchBar from "./SearchBar";
import styles from "./WeatherOverview.module.css";
import { useWeatherContext } from "../context/WeatherContext";
import { iconConditions } from "../utils/weatherImages";
import { useState } from "react";

const WeatherOverview = () => {
  const { weather, loading, error } = useWeatherContext();

  const [unit, setUnit] = useState("°C");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error} </div>;
  if (!weather) return null;

  console.log(weather);

  const weatherImages = iconConditions;
  const match = weatherImages.find(
    (item) => item.icon === weather.currentConditions.icon
  );

  const convertUnit = () => {
    setUnit((prev) => (prev === "°C" ? "°F" : "°C"));
  };

  const convertTemp = (temp, unit) => {
    if (unit === "°C") {
      return ((temp - 32) * 5) / 9;
    }
    return temp;
  };

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
          <div onClick={convertUnit} className={styles.tempNumber}>
            {Math.round(convertTemp(weather.currentConditions.temp, unit))}
            <span className={styles.superScript}>{unit}</span>
          </div>
          <div className={styles.feelsLike}>
            Feels like
            {" " +
              Math.round(
                convertTemp(weather.currentConditions.feelslike, unit)
              )}
            <span className={styles.superScript}>{unit}</span>
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
