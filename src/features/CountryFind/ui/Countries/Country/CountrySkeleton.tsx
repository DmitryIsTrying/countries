import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Подключаем стили
import styles from "./Country.module.scss";

type CountrySkeletonProps = {
  length: number;
};

export const CountrySkeleton = ({ length }: CountrySkeletonProps) => {
  return (
    <>
      {Array.from({ length }, (_, i) => (
        <div key={i} style={{ width: "280px" }} className={styles.container}>
          {/* Скелетон для изображения флага */}
          <Skeleton height={150} width="100%" className={styles.flagPhoto} />

          {/* Скелетон для информации */}
          <div className={styles.infoContainer}>
            {/* Скелетон для заголовка */}
            <Skeleton height={30} width="80%" className={`${styles.title} nunito-sans-800`} />

            {/* Скелетоны для текста */}
            <p className={`${styles.aboutText} nunito-sans-300`}>
              <span className={`${styles.aboutSpan} nunito-sans-600`}>
                <Skeleton width={100} />
              </span>
              <Skeleton width={50} />
            </p>
            <p className={`${styles.aboutText} nunito-sans-300`}>
              <span className={`${styles.aboutSpan} nunito-sans-600`}>
                <Skeleton width={80} />
              </span>
              <Skeleton width={50} />
            </p>
            <p className={`${styles.aboutText} nunito-sans-300`}>
              <span className={`${styles.aboutSpan} nunito-sans-600`}>
                <Skeleton width={70} />
              </span>
              <Skeleton width={50} />
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
