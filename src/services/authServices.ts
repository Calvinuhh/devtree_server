import UserInterface from "../interfaces/User.interface";
import User from "../models/User";
import slug from "slug";
import { hashPassword } from "../utils/hashPassword";

export const createUser = async (params: UserInterface) => {
  const { handle, email, name, password } = params;

  const newHandle = slug(handle, "");
  const handleExists = await User.findOne({ handle: newHandle });

  if (handleExists) throw Error(`Handle: ${newHandle} is already taken`);

  const newUser = await User.create({
    handle: newHandle,
    name,
    email,
    password: await hashPassword(password),
  });

  return newUser;
};
