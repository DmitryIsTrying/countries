import { useSearch } from "bll/hooks/useSearch";
import styles from "./Search.module.scss";
import searchIcon from "assets/search-left-1506-svgrepo-com.svg";
import { ChangeEvent } from "react";
import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { searchCountriesTC } from "bll/countriesReducer";

type SearchProps = {};

export const Search = ({}: SearchProps) => {
  const dispatch = useAppDispatch();
  const { search, setSearch } = useSearch(() => {
    dispatch(searchCountriesTC({ search }));
  }, 800);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <div className={styles.search}>
      <img width={25} height={25} src={searchIcon} alt="search" />
      <input
        id="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search for a country"
        className={`${styles.inputSearch} nunito-sans-600`}
        type="text"
      />
    </div>
  );
};
