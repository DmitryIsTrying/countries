import { leftArrow } from "@shared/assets";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { NoResults } from "shared/ui/NoResults/NoResults";
import { selectStatus } from "app/appStateSelectors";
import { transformNumber } from "shared/utils/transformNumber";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { CardItem } from "./CardItem";
import styles from "./CountryCard.module.scss";
import { CountryCardSkeleton } from "./CountryCardSkeleton";
import { Border } from "./border/Border";
import { searchCountriesTC, selectCountries } from "features/CountryFind/model";
import { Button } from "@shared/ui";

export const CountryCard = () => {
  const { countryName } = useParams();
  const dispatch = useAppDispatch();
  const [country] = useAppSelector(selectCountries);
  const status = useAppSelector(selectStatus);

  useLayoutEffect(() => {
    if (countryName) {
      dispatch(searchCountriesTC({ search: countryName, isFull: true }));
    }
  }, [countryName]);
  if (status === "PENDING") {
    return <CountryCardSkeleton />;
  }
  if (!country) {
    return (
      <div className={styles.container}>
        <Button>
          <img className={styles.iconBtn} width={30} src={leftArrow} alt="go back" />
          <span className={`${styles.textBtn} nunito-sans-800`}>All Countries</span>
        </Button>
        <NoResults />
      </div>
    );
  }

  const staticLeftInfo = [
    {
      title: "Native Name",
      value:
        (country?.name?.nativeName &&
          country?.name?.nativeName[Object.keys(country?.name?.nativeName)[0]]?.common) ||
        "Not Aviable",
    },
    {
      title: "Population",
      value: transformNumber(country.population) || "Not Aviable",
    },
    {
      title: "Region",
      value: country.region || "Not Aviable",
    },
    {
      title: "Sub Region",
      value: country.subregion || "Not Aviable",
    },
    {
      title: "Capital",
      value: country.capital || "Not Aviable",
    },
  ];

  const staticRightInfo = [
    {
      title: "Currencies",
      value: (country.currencies && Object.keys(country.currencies)) || "Not Aviable",
    },
    {
      title: "Languages",
      value: (country.languages && Object.keys(country.languages).join(",")) || "Not Aviable",
    },
  ];

  return (
    <div className={styles.container}>
      <Button>
        <img className={styles.iconBtn} width={30} src={leftArrow} alt="go back" />
        <span className={`${styles.textBtn} nunito-sans-800`}>Back</span>
      </Button>

      <div className={styles.content}>
        <img
          className={styles.flag}
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
        />
        <div className={styles.full}>
          <h2 className={`${styles.title} nunito-sans-800`}>{country.name.common}</h2>
          <div className={styles.info}>
            <div>
              {staticLeftInfo.map((el, i) => {
                return <CardItem item={el} key={i} />;
              })}
            </div>
            <div>
              {staticRightInfo.map((el, i) => {
                return <CardItem item={el} key={i} />;
              })}
            </div>
          </div>
          {country.borders && (
            <div>
              <span className={`${styles.information} nunito-sans-600`}>Border Countries:</span>
              <div className={styles.borders}>
                {country.borders.map((land) => (
                  <Border code={land} key={land} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
