import React, { ReactElement } from "react";
import styles from "./Errors.module.scss";

type ValuesType = {
  value: string;
  error: string;
};

type ErrorType = {
  data: ValuesType[];
};

const Errors = ({ data }: ErrorType): ReactElement => {
  return (
    <div className={styles.container}>
      <ul>
        {data.map((element: ValuesType, index) => {
          if (element.error !== "") {
            return <li key={`${index + 1}`}>{element.error}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Errors;
