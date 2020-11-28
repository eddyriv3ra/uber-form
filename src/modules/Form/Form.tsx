import React, { ReactElement, useState } from "react";
import Container from "components/Container";
import styles from "./Form.module.scss";

const Form = (): ReactElement => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Email"
          className={styles.input}
          value={value}
          onChange={handleChange}
        />
      </form>
    </Container>
  );
};

export default Form;
