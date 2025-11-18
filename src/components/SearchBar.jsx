import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useWeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const { location, setLocation } = useWeatherContext();
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(capitalize(value));
    setValue("");
    console.log(location, "location");
    console.log(value, "value");
  }

  function capitalize(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <>
      <div className={styles.searchBarContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="location"
            id="locationInput"
            placeholder="Search location..."
            autoComplete="off"
            onChange={handleChange}
            value={value}
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#FFFFFF"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
