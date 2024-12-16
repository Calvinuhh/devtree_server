import hashPassword from "../utils/hashPassword";
import checkPassword from "../utils/checkPassword";
import checkEmailExists from "../utils/checkEmailExists";
import { createHandle, manageHandle } from "../utils/manageHandle";
import { IUser } from "../interfaces/User.interface";
import User from "../models/User";

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
  if (!user) throw Error("User not registered");

  const result = await checkPassword(password, user.password);

  if (!result) throw Error("Incorrect data");

  return result;
};
