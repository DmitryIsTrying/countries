import { useState } from "react";
import styles from "./SearchSettings.module.scss";
import searchIcon from "assets/search-left-1506-svgrepo-com.svg";

export const SearchSettings = () => {
  const [selectedRegion, setSelectedRegion] = useState("filter");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <img width={25} height={25} src={searchIcon} alt="search" />
        <input
          placeholder="Search for a country"
          className={`${styles.inputSearch} nunito-sans-600`}
          type="text"
        />
      </div>
      <select
        className={`${styles.selectFilter} nunito-sans-600`}
        value={selectedRegion}
        onChange={handleChange}
      >
        <option value="filter">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};
