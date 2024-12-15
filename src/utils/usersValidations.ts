export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) throw Error("Invalid email format");
};

export const onlyStrings = (param: string, input: string) => {
  const regex = /^[a-zA-Z\s]+$/;

  if (!regex.test(param))
    throw Error(
      `In input ${input} are only allowed letters, no numbers or special characters`
    );
};

export const validateLenghtFromTo = (
  param: string,
  input: string,
  num1: number,
  num2: number
) => {
  if (param.length < num1 || param.length > num2)
    throw Error(`${input} length must be between ${num1} and ${num2}`);
};

export const securePassword = (
  param: string,
  input: string,
  minLength: number
) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

  if (!regex.test(param))
    throw Error(
      `${input} must be at least ${minLength} characters long, upper and lower case, a number and a special character.`
    );
};
