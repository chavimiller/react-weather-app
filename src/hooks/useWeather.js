import { useState, useEffect } from "react";
import { fetchWeather } from "../utils/weatherApi";

export function useWeather(location) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;

    async function getWeather() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchWeather(location);
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getWeather();
  }, [location]);

  return { weather, loading, error };
}
