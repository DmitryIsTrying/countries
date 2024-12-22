import { useHover } from "@shared/hooks";
import { Transition } from "@shared/ui";
import { useRef } from "react";
import { transformNumber } from "shared/utils/transformNumber";
import styles from "./Country.module.scss";

type CountryProps = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flagUrl: string;
};

export const Country = ({ flagUrl, name, population, region, capital }: CountryProps) => {
  const ref = useRef(null);
  const { isHovering } = useHover(ref);

  return (
    <div ref={ref} className={styles.container}>
      <Transition isOpen={isHovering} link={`/${name.toLowerCase()}`} />
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
