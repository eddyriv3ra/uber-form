type ValuesType = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  city: string;
};

const validateData = (values: ValuesType): ValuesType => {
  const errors = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    password: "",
  };
  if (!values.email) {
    errors.email = "El correo electronico es obligatorio.";
  }

  if (!values.firstName) {
    errors.firstName = "El nombre es obligatorio.";
  }

  if (!values.lastName) {
    errors.lastName = "El apellido es obligatorio.";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "El número de teléfono es obligatorio.";
  }

  if (!values.city) {
    errors.city = "La ciudad es obligatoria.";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria.";
  }

  console.log("errors", errors);

  return errors;
};

export default validateData;
