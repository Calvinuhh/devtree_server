import UserModel from "../interfaces/User.interface";
import User from "../models/User";

export const getUsers = async () => {
  const users: UserModel[] = await User.find();
  if (users.length === 0) throw Error("No hay usuarios encontrados");

  return users;
};

export const deleteUser = async (id: string) => {
  const user: UserModel | null = await User.findByIdAndDelete(id);
  if (!user) throw Error("Usuario no encontrado");

  return user;
};
