import { useMemo } from "react";
import styles from "./Countries.module.scss";
import { Country, CountrySkeleton, selectCountries, selectFilter } from "@CountryFind";
import { NoResults, useAppSelector } from "@shared";
import { selectStatus } from "@app";

export const Countries = () => {
  const countries = useAppSelector(selectCountries);
  const filter = useAppSelector(selectFilter);
  const status = useAppSelector(selectStatus);

  const filteredCountries = useMemo(() => {
    if (filter !== "All") {
      return countries.filter((country) => country.region === filter);
    }
    return countries;
  }, [countries, filter]);

  return (
    <div className={styles.wrapper}>
      {filteredCountries.length !== 0 && (
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
      )}
      {filteredCountries.length === 0 && status !== "PENDING" && <NoResults />}
      {filteredCountries.length === 0 && status === "PENDING" && (
        <div className={styles.container}>
          <CountrySkeleton length={10} />
        </div>
      )}
    </div>
  );
};
