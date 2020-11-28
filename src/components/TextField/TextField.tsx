import React, { ReactElement } from "react";
import styles from "./TextField.module.scss";

type TextFieldProps = {
  type: string;
  name: string;
  customStyles?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const defaultProps = {
  customStyles: "",
};

const TextField = ({
  type,
  name,
  customStyles,
  onChange,
  value,
  placeholder,
}: TextFieldProps & typeof defaultProps): ReactElement => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`${styles.input} ${customStyles}`}
      value={value}
      onChange={onChange}
    />
  );
};

TextField.defaultProps = defaultProps;

export default TextField;
