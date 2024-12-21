import styles from "./CountryCard.module.scss";

type CardItemProps = {
  item: {
    title: string;
    value: string | number | string[];
  };
};

export const CardItem = ({ item }: CardItemProps) => {
  return (
    <p className={`${styles.information} nunito-sans-300`}>
      <span className={`nunito-sans-600`}>{item.title}:</span>
      {item.value}
    </p>
  );
};
