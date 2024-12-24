import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={`${styles.text} nunito-sans-800`}>Oops! Page not found</p>
        <p className={`${styles.description} nunito-sans-600`}>
          Unfortunately, the page you requested does not exist. You may have entered the wrong
          address or the page has been deleted.
        </p>
        <Link className={`${styles.link}  nunito-sans-800`} to={"/"}>
          Go back to the main page
        </Link>
      </div>
    </div>
  );
};
