import HourlyData from "./HourlyData";
import styles from "./WeatherDetail.module.css";
import { WeatherStats } from "./WeatherStats";

const WeatherDetail = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.roundedBox}>
          <div className={styles.detailTitle}>Hourly Forecast</div>
          <div className={styles.hourlyFrame}>
            <HourlyData desc={"Sunny"} degrees={"21"} time={"6:00am"} />
            <HourlyData desc={"Sunny"} degrees={"22"} time={"7:00am"} />
            <HourlyData desc={"Cloudy"} degrees={"24"} time={"8:00am"} />
            <HourlyData desc={"Cloudy"} degrees={"25"} time={"9:00am"} />
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
