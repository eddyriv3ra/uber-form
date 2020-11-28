import React, { ReactElement, ReactNode } from "react";
import styles from "./Container.module.scss";

type PropsType = {
  children: ReactNode;
  customStyles?: string;
};

const defaultProps = {
  customStyles: "",
};

const Container = ({
  children,
  customStyles,
}: PropsType & typeof defaultProps): ReactElement => {
  return (
    <div className={`${styles.container} ${customStyles}`}>{children}</div>
  );
};

Container.defaultProps = defaultProps;

export default Container;
