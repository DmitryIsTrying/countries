import styles from "./Header.module.scss";
import moon from "../../../assets/moon-svgrepo-com.svg";

export const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} nunito-sans-800`}>Where in the world?</h1>
      <div className={styles.themeContainer}>
        <button className={styles.btn}>
          <img
            className={styles.changeModeImg}
            width={30}
            height={30}
            src={moon}
            alt="change theme button"
          />
        </button>
        <p className={`${styles.changeModeText} nunito-sans-600`}>Dark Mode</p>
      </div>
    </div>
  );
};
