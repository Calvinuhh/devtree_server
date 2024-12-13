import User from "../models/User";
import UserInterface from "../interfaces/User.interface";
import { hashPassword } from "../utils/hashPassword";
import slug from "slug";

export const createUser = async (params: UserInterface) => {
  const { handle, email, name, password } = params;

  const user = await User.findOne({ email });
  if (user) throw Error(`User with email: ${user.email} already exists`);

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

export const getUsers = async () => {
  const users = await User.find();

  if (users.length === 0) throw Error("No users found");

  return users;
};

export const deleteUser = async (id: string) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) throw Error("User not found");

  return user;
};
