import styles from "./NoResults.module.scss";

export const NoResults = () => {
  return (
    <div className={styles.noResults}>
      <div className={styles.noResults__icon}>🕵️‍♂️</div>
      <h2 className={`${styles.noResults__title} nunito-sans-800`}>Nothing was found</h2>
      <p className={`${styles.noResults__description} nunito-sans-600`}>
        Unfortunately, nothing was found for your search. Try changing the search parameters.
      </p>
    </div>
  );
};
