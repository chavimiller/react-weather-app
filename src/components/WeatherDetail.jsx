import { useWeatherContext } from "../context/WeatherContext";
import HourlyData from "./HourlyData";
import styles from "./WeatherDetail.module.css";
import { WeatherStats } from "./WeatherStats";

const WeatherDetail = () => {
  const { weather, loading, error } = useWeatherContext();

  const condition = (hour) => {
    return weather.days[0].hours[hour].conditions === "Partially cloudy"
      ? "Cloudy"
      : weather.days[0].hours[hour].conditions;
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.roundedBox}>
          <div className={styles.detailTitle}>Hourly Forecast</div>
          <div className={styles.hourlyFrame}>
            <HourlyData
              desc={condition(19)}
              degrees={Math.round(weather.days[0].hours[19].temp)}
              time={"6:00am"}
            />
            <HourlyData
              desc={condition(20)}
              degrees={Math.round(weather.days[0].hours[20].temp)}
              time={"7:00am"}
            />
            <HourlyData
              desc={condition(21)}
              degrees={Math.round(weather.days[0].hours[21].temp)}
              time={"8:00am"}
            />
            <HourlyData
              desc={condition(22)}
              degrees={Math.round(weather.days[0].hours[22].temp)}
              time={"9:00am"}
            />
          </div>
          <div className={styles.statsFrame}>
            <WeatherStats
              title={"Chance of Precipitation"}
              number={"52"}
              unit={"%"}
            />
            <WeatherStats title={"Humidity"} number={"100"} unit={"%"} />
            <WeatherStats title={"Humidity"} number={"100"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetail;
