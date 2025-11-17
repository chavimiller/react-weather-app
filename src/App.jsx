import "./App.css";
import WeatherDetail from "./components/WeatherDetail";
import WeatherOverview from "./components/WeatherOverview";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <>
      <WeatherOverview />
      <WeatherDetail />
    </>
  );
}

export default App;
