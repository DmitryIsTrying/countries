import { Filter } from "./Filter";
import { Search } from "./Search/Search";
import styles from "./SearchAndFilter.module.scss";

export const SearchAndFilter = () => {
  return (
    <div className={styles.container}>
      <Search />
      <Filter />
    </div>
  );
};
