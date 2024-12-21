import styles from "./NoResults.module.scss";

export const NoResults = () => {
  return (
    <div className={styles.noResults}>
      <div className={styles.noResults__icon}>🕵️‍♂️</div>
      <h2 className={`${styles.noResults__title} nunito-sans-800`}>Ничего не найдено</h2>
      <p className={`${styles.noResults__description} nunito-sans-600`}>
        К сожалению, по вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
      </p>
    </div>
  );
};
