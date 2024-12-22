import { SearchAndFilter } from "features/Search";
import { Countries } from "../Countries";
import styles from "./CountriesPanel.module.scss";

export const CountriesPanel = () => {
  return (
    <div className={styles.container}>
      <SearchAndFilter />
      <Countries />
    </div>
  );
};
