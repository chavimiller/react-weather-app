import "./App.css";
import DesktopWarning from "./components/DesktopWarning";
import WeatherDetail from "./components/WeatherDetail";
import WeatherOverview from "./components/WeatherOverview";
import { useWeatherContext } from "./context/WeatherContext";

function App() {
  const { loading } = useWeatherContext();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <DesktopWarning />
      <WeatherOverview />
      <WeatherDetail />
    </>
  );
}

export default App;
