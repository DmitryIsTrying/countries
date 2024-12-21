import { AnchorHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Link to={"/"} className={styles.button} {...props}>
      {children}
    </Link>
  );
};
