import styles from "./Search.module.scss";
import searchIcon from "assets/search-left-1506-svgrepo-com.svg";

type SearchProps = {};

export const Search = ({}: SearchProps) => {
  return (
    <div className={styles.search}>
      <img width={25} height={25} src={searchIcon} alt="search" />
      <input
        id="search"
        placeholder="Search for a country"
        className={`${styles.inputSearch} nunito-sans-600`}
        type="text"
      />
    </div>
  );
};
