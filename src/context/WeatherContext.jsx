import { createContext, useContext, useState, useEffect } from "react";
import { useWeather } from "../hooks/useWeather";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [location, setLocation] = useState("Jerusalem");
  const { weather, loading, error } = useWeather(location);

  return (
    <WeatherContext.Provider
      value={{ location, setLocation, weather, loading, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(WeatherContext);
}
