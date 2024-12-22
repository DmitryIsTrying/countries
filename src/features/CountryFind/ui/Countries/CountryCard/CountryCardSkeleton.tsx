import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Подключаем стили
import styles from "./CountryCard.module.scss";
import { leftArrow } from "@shared/assets";
import { BorderSekeleton } from "./border/BorderSekeleton";
import { Button } from "@shared/ui";

export const CountryCardSkeleton = () => {
  return (
    <div className={styles.container}>
      <Button disabled>
        <img className={styles.iconBtn} width={30} src={leftArrow} alt="go back" />
        <span className={`${styles.textBtn} nunito-sans-800`}>Back</span>
      </Button>
      <div className={styles.content}>
        <div style={{ width: "500px" }}>
          <Skeleton height={300} />
        </div>
        <div className={styles.full}>
          <Skeleton height={30} width={200} />
          <div className={styles.info}>
            <Skeleton height={20} width={200} count={4} />
            <Skeleton height={20} width={200} count={2} />
          </div>

          <div>
            <span className={`${styles.information} nunito-sans-600`}>Border Countries:</span>
            <div className={styles.borders}>
              <BorderSekeleton />
              <BorderSekeleton />
              <BorderSekeleton />
              <BorderSekeleton />
              <BorderSekeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
