import React, { ReactElement } from "react";
import styles from "./Button.module.scss";

type ButtonTypes = {
  label: string;
  handleClick: (e: React.FormEvent) => void;
};

const Button = ({ handleClick, label }: ButtonTypes): ReactElement => {
  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
