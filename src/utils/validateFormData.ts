import errorMessages from "constants/errorMessages";

type ValuesType = {
  email: { value: string; error: string };
  firstName: { value: string; error: string };
  lastName: { value: string; error: string };
  phoneNumber: { value: string; error: string };
  password: { value: string; error: string };
  city: { value: string; error: string };
};

const validateData = (values: ValuesType) => {
  return Object.entries(values).reduce(
    (acc, currentValue) => {
      const key = currentValue[0];
      if (currentValue[1].value === "") {
        return {
          ...acc,
          [key]: {
            ...currentValue[1],
            error: errorMessages[key],
          },
        };
      }
      return acc;
    },
    { ...values } as { [key: string]: { value: string; error: string } },
  );
};

export default validateData;
