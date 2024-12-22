import { Link } from "react-router-dom";
import styles from "./Transition.module.scss";

interface TransitionProps {
  isOpen: boolean; // Флаг, открыт ли компонент
  link: string;
}

export const Transition = ({ isOpen, link }: TransitionProps) => {
  if (!isOpen) return null; // Если компонент закрыт, ничего не рендерим

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <Link to={link} className={`${styles.button} nunito-sans-800`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
