import { hash, compare } from "bcrypt";

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 10);
  return hashedPassword;
};

export const checkPassword = async (password: string, hash: string) => {
  const check = await compare(password, hash);
  return check;
};

export default checkPassword;
