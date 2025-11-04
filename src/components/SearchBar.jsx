import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          name="location"
          id="locationInput"
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default SearchBar;
