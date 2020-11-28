import React, { ReactElement } from "react";
import styles from "./Errors.module.scss";

type ErrorType = {
  data: string[];
};

const Errors = ({ data }: ErrorType): ReactElement => {
  return (
    <div className={styles.container}>
      <ul>
        {data.map((element: string) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default Errors;
