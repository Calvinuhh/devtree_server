import User from "../models/User";
import UserInterface from "../interfaces/User.interface";

export const createUser = async (params: UserInterface) => {
  const newUser = await User.create(params);
  return newUser;
};

export const getUsers = async () => {
  const users = await User.find();

  if (users.length === 0) throw Error("No users found");

  return users;
};
