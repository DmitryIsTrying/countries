import { useAppSelector } from "shared/hooks/useAppSelector";
import styles from "./Filter.module.scss";

import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { ChangeEvent } from "react";
import { Region, selectFilter, setFilterRegion } from "features/CountryFind";

export const Filter = () => {
  const region = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const handleChangeRegion = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterRegion(event.currentTarget.value as Region));
    event.currentTarget.blur();
  };
  return (
    <select
      id="regionSelector"
      className={`${styles.selectFilter} nunito-sans-600`}
      value={region}
      onChange={handleChangeRegion}
    >
      <option value="All">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
