import React, { ReactElement } from "react";
import Form from "modules/Form";
import styles from "./App.module.scss";

const App = (): ReactElement => {
  return (
    <div className={styles.app}>
      <Form />
    </div>
  );
};

export default App;
