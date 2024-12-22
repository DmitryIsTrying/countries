import { useSearch } from "shared/hooks/useSearch";
import styles from "./Search.module.scss";
import { searchIcon } from "@shared/assets";
import { ChangeEvent, useRef } from "react";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { searchCountriesTC } from "features/CountryFind";

type SearchProps = {};

export const Search = ({}: SearchProps) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const { search, setSearch } = useSearch(() => {
    dispatch(searchCountriesTC({ search }));
  }, 800);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const handleFocus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div onClick={handleFocus} className={styles.search}>
      <img width={25} height={25} src={searchIcon} alt="search" />
      <input
        ref={ref}
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
