import { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
};

export const Button = ({ children, disabled = false, ...props }: ButtonProps) => {
  return disabled ? (
    <button disabled style={{ cursor: "wait" }} className={styles.button}>
      {children}
    </button>
  ) : (
    <Link to={"/"} className={styles.button} {...props}>
      {children}
    </Link>
  );
};
