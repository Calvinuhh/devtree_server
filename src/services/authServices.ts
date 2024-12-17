import { hashPassword, checkPassword } from "../utils/checkAndHashPassword";
import checkEmailExists from "../utils/checkEmailExists";
import { createHandle, manageHandle } from "../utils/manageHandle";
import { IUser } from "../interfaces/User.interface";
import User from "../models/User";
import generateJWT from "../utils/jwt";

export const createUser = async (params: IUser) => {
  const { handle, email, name, password }: IUser = params;

  await checkEmailExists(email);

  const newHandle = createHandle(handle);
  await manageHandle(newHandle);

  const newUser = await User.create({
    handle: newHandle,
    name,
    email,
    password: await hashPassword(password),
  });

  return newUser;
};

export const login = async (email: string, password: string) => {
  
  const user = await User.findOne({ email });
  if (!user) throw Error("El usuario no existe");

  const result = await checkPassword(password, user.password);
  if (!result) throw Error("Datos incorrectos");

  const token = generateJWT({ id: user._id });

  return token;
};
