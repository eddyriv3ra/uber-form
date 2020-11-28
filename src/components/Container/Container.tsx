import React, { ReactElement, ReactNode } from "react";
import styles from "./Container.module.scss";

type PropsType = {
  children: ReactNode;
};

const Container = ({ children }: PropsType): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
