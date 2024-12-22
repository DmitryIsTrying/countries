import { useEffect, useState } from "react";
import styles from "./LinearBar.module.scss"; // Подключаем стили

export const LinearBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0; // Сбрасываем прогресс, если он достиг 100%
        }
        return prevProgress + 10; // Увеличиваем прогресс
      });
    }, 400); // Интервал обновления

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
