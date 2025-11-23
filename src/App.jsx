import "./App.css";
import WeatherDetail from "./components/WeatherDetail";
import WeatherOverview from "./components/WeatherOverview";
import { useWeatherContext } from "./context/WeatherContext";

function App() {
  const { loading } = useWeatherContext();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <WeatherOverview />
      <WeatherDetail />
    </>
  );
}

export default App;
