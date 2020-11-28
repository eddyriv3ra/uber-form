type ErrorTypes = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  city: string;
  [key: string]: string;
};

const errorMessages: ErrorTypes = {
  email: "El correo electronico es obligatorio.",
  firstName: "El nombre es obligatorio.",
  lastName: "El apellido es obligatorio.",
  phoneNumber: "El número de teléfono es obligatorio.",
  password: "La contraseña es obligatoria.",
  city: "La ciudad es obligatoria.",
};

export default errorMessages;
