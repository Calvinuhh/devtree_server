import User from "../models/User";

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
