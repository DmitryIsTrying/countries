import { Link } from "react-router-dom";
import styles from "./Border.module.scss";
import { useBorder } from "shared/hooks/useBorder";
import { BorderSekeleton } from "./BorderSekeleton";

type BorderProps = {
  code: string;
};

export const Border = ({ code }: BorderProps) => {
  const { name, isLoading } = useBorder(code);
  return isLoading ? (
    <BorderSekeleton />
  ) : (
    <Link className={`${styles.border} nunito-sans-300`} to={`/${name?.toLowerCase()}`}>
      {name}
    </Link>
  );
};
