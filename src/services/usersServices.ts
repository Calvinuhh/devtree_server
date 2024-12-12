import User from "../models/User";
import UserInterface from "../interfaces/User.interface";

export const createUser = async (params: UserInterface) => {
  
  const user = await User.findOne({ email: params.email });

  if (user) throw Error(`User with email: ${user.email} already exists`);

  const newUser = await User.create(params);

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
