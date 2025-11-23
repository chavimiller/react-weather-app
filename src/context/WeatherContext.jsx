import { createContext, useContext, useState, useEffect } from "react";
import { useWeather } from "../hooks/useWeather";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [location, setLocation] = useState("Jerusalem");
  const { weather, loading, error } = useWeather(location);

  const [unit, setUnit] = useState("°C");

  const toggleUnit = () => {
    setUnit((prev) => (prev === "°C" ? "°F" : "°C"));
  };

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        weather,
        loading,
        error,
        unit,
        toggleUnit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  return useContext(WeatherContext);
}
