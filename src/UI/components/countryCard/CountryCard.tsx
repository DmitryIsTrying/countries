import { searchCountriesTC, setCountries } from "bll/countriesReducer";
import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { useAppSelector } from "bll/hooks/useAppSelector";
import { selectCountries } from "common/selectors/countriesSelectors";
import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import arrow from "assets/left-arrow-back-svgrepo-com.svg";
import { Button } from "../Button/Button";
import styles from "./CountryCard.module.scss";
import { CardItem } from "./CardItem";
import { Border } from "./border/Border";

export const CountryCard = () => {
  const { countryName } = useParams();
  const dispatch = useAppDispatch();
  const [country] = useAppSelector(selectCountries);

  useLayoutEffect(() => {
    if (countryName) {
      dispatch(setCountries([]));
      dispatch(searchCountriesTC({ search: countryName, isFull: true }));
    }
  }, [countryName]);
  console.log(countryName, country);
  if (!country) {
    return <div>upss</div>;
  }

  const staticLeftInfo = [
    {
      title: "Native Name",
      value: country.name.nativeName[Object.keys(country.name.nativeName)[0]].common,
    },
    {
      title: "Population",
      value: country.population,
    },
    {
      title: "Region",
      value: country.region,
    },
    {
      title: "Sub Region",
      value: country.subregion,
    },
    {
      title: "Capital",
      value: country.capital,
    },
  ];

  const staticRightInfo = [
    {
      title: "Currencies",
      value: Object.keys(country.currencies),
    },
    {
      title: "Languages",
      value: Object.keys(country.languages),
    },
  ];

  return (
    <div className={styles.container}>
      <Button>
        <img className={styles.iconBtn} width={30} src={arrow} alt="go back" />
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
          <div>
            <span className={`${styles.information} nunito-sans-600`}>Border Countries:</span>
            <div className={styles.borders}>
              {country.borders.map((land) => (
                <Border code={land} key={land} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
