import { toZonedTime } from "date-fns-tz";
import { useWeatherContext } from "../context/WeatherContext";
import HourlyData from "./HourlyData";
import styles from "./WeatherDetail.module.css";
import { WeatherStats } from "./WeatherStats";
import { format } from "date-fns-tz";

const WeatherDetail = () => {
  const { weather, loading } = useWeatherContext();

  if (loading || !weather) return <div>Loading...</div>;

  const currentHour = new Date().getHours();

  const condition = (hour) => {
    return weather.days[0].hours[hour].conditions === "Partially cloudy"
      ? "Cloudy"
      : weather.days[0].hours[hour].conditions;
  };

  const degrees = (hour) => {
    return Math.round(weather.days[0].hours[hour].temp);
  };

  const epoch = (hour) => {
    return weather.days[0].hours[hour].datetimeEpoch;
  };

  const timezone = weather.timezone;

  const time = (timezone, epoch) => {
    const formattedTime = format(
      toZonedTime(epoch * 1000, timezone),
      "h:mm a",
      {
        timezone: timezone,
      }
    );
    return formattedTime;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.roundedBox}>
          <div className={styles.detailTitle}>Hourly Forecast</div>
          <div className={styles.hourlyFrame}>
            <HourlyData
              desc={condition(currentHour)}
              degrees={degrees(currentHour)}
              time={time(timezone, epoch(currentHour))}
            />
            <HourlyData
              desc={condition(currentHour + 1)}
              degrees={degrees(currentHour + 1)}
              time={time(timezone, epoch(currentHour + 1))}
            />
            <HourlyData
              desc={condition(currentHour + 2)}
              degrees={degrees(currentHour + 2)}
              time={time(timezone, epoch(currentHour + 2))}
            />
            <HourlyData
              desc={condition(currentHour + 3)}
              degrees={degrees(currentHour + 3)}
              time={time(timezone, epoch(currentHour + 3))}
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
