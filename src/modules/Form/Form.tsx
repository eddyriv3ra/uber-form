import React, { ReactElement, useState } from "react";
import Container from "components/Container";
import TextField from "components/TextField";
import Button from "components/Button";
import Errors from "components/Errors";
import validateValues from "utils/validateFormData";
import styles from "./Form.module.scss";

type ValuesTypes = {
  email: { value: string; error: string };
  firstName: { value: string; error: string };
  lastName: { value: string; error: string };
  phoneNumber: { value: string; error: string };
  password: { value: string; error: string };
  city: { value: string; error: string };
  code: { value: string; error: string };
  [key: string]: { value: string; error: string };
};

const Form = (): ReactElement => {
  const [values, setValues] = useState<ValuesTypes>({
    email: { value: "", error: "" },
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    phoneNumber: { value: "", error: "" },
    password: { value: "", error: "" },
    city: { value: "", error: "" },
    code: { value: "", error: "" },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorsValidation = validateValues(values);
    const checkErrors = Object.values(errorsValidation).some(
      (element) => element.error !== "",
    );

    if (checkErrors) {
      setValues({ ...values, ...errorsValidation });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: { value: e.target.value, error: "" },
    });
  };

  return (
    <Container customStyles={styles.container}>
      <h4 className={styles.formInfo}>Regístrate ahora</h4>
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        customStyles={styles.emailInput}
        value={values.email.value}
        error={values.email.error}
        onChange={handleChange}
      />
      <div className={styles.textWrapper}>
        <TextField
          type="text"
          name="firstName"
          placeholder="Name"
          value={values.firstName.value}
          customStyles={styles.name}
          error={values.firstName.error}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={values.lastName.value}
          customStyles={styles.name}
          error={values.lastName.error}
          onChange={handleChange}
        />
      </div>
      <TextField
        type="tel"
        name="phoneNumber"
        placeholder="Telefono"
        value={values.phoneNumber.value}
        customStyles={styles.phoneInput}
        error={values.phoneNumber.error}
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Crear Contraseña"
        value={values.password.value}
        customStyles={styles.passwordInput}
        error={values.password.error}
        onChange={handleChange}
      />
      <TextField
        type="text"
        name="city"
        placeholder="Ciudad"
        value={values.city.value}
        customStyles={styles.cityInput}
        error={values.email.error}
        onChange={handleChange}
      />
      <TextField
        type="text"
        name="code"
        placeholder="Codigo de invitacion (opcional)"
        value={values.code.value}
        customStyles={styles.codeInput}
        onChange={handleChange}
      />
      <p className={styles.paragraph}>
        Al continuar, acepto recibir llamadas o mensajes SMS, aunque procedan de
        marcadores automatizados, de Uber y sus filiales en el número que he
        proporcionado. Entiendo que puedo enviar la palabra &quot;STOP&quot; al
        89203 para dejar de recibir mensajes.
      </p>
      <p className={styles.paragraph}>
        Al continuar, también acepto recibir comunicaciones de marketing de
        Uber, aunque procedan de marcadores automáticos, por SMS en el número
        que he proporcionado. Estos mensajes podrán promocionar productos y
        servicios de Uber, como viajes, Uber Eats o patinetes y bicis JUMP, así
        como productos y servicios de nuestros socios. Entiendo que dar mi
        consentimiento para recibir estos mensajes de marketing no es
        obligatorio para usar los servicios de Uber. En cualquier momento puedo
        responder a cualquier mensaje de Uber con la palabra STOP para darme de
        baja.
      </p>
      <Button label="SIGUIENTE" handleClick={handleSubmit} />
    </Container>
  );
};

export default Form;
