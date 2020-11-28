import React, { ReactElement, useState } from "react";
import Container from "components/Container";
import TextField from "components/TextField";
import styles from "./Form.module.scss";

const Form = (): ReactElement => {
  const [value, setValue] = useState({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: [e.target.value] });
  };

  return (
    <Container customStyles={styles.container}>
      <h4 className={styles.formInfo}>Regístrate ahora</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          customStyles={styles.emailInput}
          value={value.email}
          onChange={handleChange}
        />
      </form>
    </Container>
  );
};

export default Form;
