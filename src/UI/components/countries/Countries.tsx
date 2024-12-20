import { useEffect, useMemo } from "react";
import styles from "./Countries.module.scss";
import { Country } from "./country/Country";
import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { fetchCountriesTC } from "bll/countriesReducer";
import { useAppSelector } from "bll/hooks/useAppSelector";
import { selectCountries, selectFilter } from "common/selectors/countriesSelectors";
export const Countries = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const filter = useAppSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchCountriesTC());
  }, []);

  const filteredCountries = useMemo(() => {
    if (filter !== "All") {
      return countries.filter((country) => country.region === filter);
    }
    return countries;
  }, [countries, filter]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {filteredCountries.map((country) => (
          <Country
            capital={country.capital ? country.capital[0] : "Not available"}
            flagUrl={country.flags.svg}
            name={country.name.common}
            key={country.name.common}
            population={country.population}
            region={country.region}
          />
        ))}
      </div>
    </div>
  );
};
