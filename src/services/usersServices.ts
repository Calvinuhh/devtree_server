import UserModel, { IUser } from "../interfaces/User.interface";
import User from "../models/User";

export const getUsers = async () => {
  const users: UserModel[] = await User.find();
  if (users.length === 0) throw Error("No users found");

  return users;
};

export const deleteUser = async (id: string) => {
  const user: IUser | null = await User.findByIdAndDelete(id);
  if (!user) throw Error("User not found");

  return user;
};
