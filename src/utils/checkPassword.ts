import { compare } from "bcrypt";

export const checkPassword = async (password: string, hash: string) => {
  const check = await compare(password, hash);
  return check;
};

export default checkPassword;
