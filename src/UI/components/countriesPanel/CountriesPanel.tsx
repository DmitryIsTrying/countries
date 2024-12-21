import { Countries } from "../countries/Countries";
import { SearchSettings } from "../searchSettings/SearchSettings";
import styles from "./CountriesPanel.module.scss";

export const CountriesPanel = () => {
  console.log("CountriesPanel render");
  return (
    <div className={styles.container}>
      <SearchSettings />
      <Countries />
    </div>
  );
};
