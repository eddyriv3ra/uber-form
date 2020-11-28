import React, { ReactElement, useState } from "react";
import Container from "components/Container";
import TextField from "components/TextField";
import Button from "components/Button";
import Errors from "components/Errors";
import validateValues from "utils/validateFormData";
import styles from "./Form.module.scss";

const Form = (): ReactElement => {
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    city: "",
    code: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorsValidation = validateValues(values);
    const errorValues = Object.values(errorsValidation);

    const filterErrors = errorValues.filter((el) => {
      return el !== "";
    });

    if (errorValues.length > 0) {
      setErrors(filterErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container customStyles={styles.container}>
      <h4 className={styles.formInfo}>Regístrate ahora</h4>
      <TextField
        type="email"
        name="email"
        placeholder="Email"
        customStyles={styles.emailInput}
        value={values.email}
        onChange={handleChange}
      />
      <div className={styles.textWrapper}>
        <TextField
          type="text"
          name="firstName"
          placeholder="Name"
          value={values.firstName}
          customStyles={styles.name}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={values.lastName}
          customStyles={styles.name}
          onChange={handleChange}
        />
      </div>
      <TextField
        type="tel"
        name="phoneNumber"
        placeholder="Telefono"
        value={values.phoneNumber}
        customStyles={styles.phoneInput}
        onChange={handleChange}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Crear Contraseña"
        value={values.password}
        customStyles={styles.passwordInput}
        onChange={handleChange}
      />
      <TextField
        type="text"
        name="city"
        placeholder="Ciudad"
        value={values.city}
        customStyles={styles.cityInput}
        onChange={handleChange}
      />
      <TextField
        type="text"
        name="code"
        placeholder="Codigo de invitacion (opcional)"
        value={values.code}
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

      {errors.length > 0 ? <Errors data={errors} /> : null}
    </Container>
  );
};

export default Form;
