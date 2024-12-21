import { Link } from "react-router-dom";
import styles from "./Border.module.scss";
import { useBorder } from "bll/hooks/useBorder";

type BorderProps = {
  code: string;
};

export const Border = ({ code }: BorderProps) => {
  const name = useBorder(code);
  return (
    <Link className={`${styles.border} nunito-sans-300`} to={`/${name?.toLowerCase()}`}>
      {name}
    </Link>
  );
};
