import styles from "./SearchSettings.module.scss";

import { RegionFilter } from "./regionFilter/RegionFilter";
import { Search } from "./search/Search";

export const SearchSettings = () => {
  return (
    <div className={styles.container}>
      <Search />
      <RegionFilter />
    </div>
  );
};
