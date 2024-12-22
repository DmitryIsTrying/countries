import styles from "./Header.module.scss";
import { moon } from "@shared/assets";
import { sun } from "@shared/assets";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { selectTheme } from "app/appStateSelectors";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { setTheme } from "app/appReducer";

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
