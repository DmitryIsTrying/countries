import styles from "./Header.module.scss";
import moon from "../../../assets/moon-svgrepo-com.svg";
import sun from "../../../assets/sun-svgrepo-com.svg";
import { useAppSelector } from "bll/hooks/useAppSelector";
import { selectTheme } from "common/selectors/appStateSelectors";
import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { setTheme } from "bll/appReducer";

export const Header = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };
  return (
    <header className={styles.container}>
      <h1 className={`${styles.title} nunito-sans-800`}>Where in the world?</h1>
      <div className={styles.themeContainer}>
        <button aria-label="change theme button" onClick={handleChangeTheme} className={styles.btn}>
          <img
            key={theme}
            className={styles.changeModeImg}
            width={25}
            height={25}
            src={theme === "light" ? moon : sun}
            alt="change theme icon"
          />
        </button>
        <p className={`${styles.changeModeText} nunito-sans-600`}>{`${
          theme === "light" ? "Dark" : "Light"
        } Mode`}</p>
      </div>
    </header>
  );
};
