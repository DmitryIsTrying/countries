import { transformNumber } from "common/utils/transformNumber";
import styles from "./Country.module.scss";

type CountryProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flagUrl: string;
};

export const Country = ({ flagUrl, name, population, region, capital }: CountryProps) => {
  return (
    <div className={styles.container}>
      <img loading="lazy" className={styles.flagPhoto} src={flagUrl} alt={`Flag of ${name}`} />
      <div className={styles.infoContainer}>
        <h2 className={`${styles.title} nunito-sans-800`}>{name}</h2>
        <p className={`${styles.aboutText} nunito-sans-300`}>
          <span className={`${styles.aboutSpan} nunito-sans-600`}>Population:</span>
          {transformNumber(population)}
        </p>
        <p className={`${styles.aboutText} nunito-sans-300`}>
          <span className={`${styles.aboutSpan} nunito-sans-600`}>Region:</span>
          {region}
        </p>
        <p className={`${styles.aboutText} nunito-sans-300`}>
          <span className={`${styles.aboutSpan} nunito-sans-600`}>Capital:</span>
          {capital}
        </p>
      </div>
    </div>
  );
};
