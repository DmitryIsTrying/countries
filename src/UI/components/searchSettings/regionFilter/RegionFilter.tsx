import { useAppSelector } from "bll/hooks/useAppSelector";
import styles from "./RegionFilter.module.scss";
import { selectFilter } from "common/selectors/countriesSelectors";
import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { ChangeEvent } from "react";
import { Region, setFilterRegion } from "bll/countriesReducer";

export const RegionFilter = () => {
  const region = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const handleChangeRegion = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterRegion(event.currentTarget.value as Region));
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
