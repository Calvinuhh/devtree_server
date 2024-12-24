import User from "../models/User";

export const getUserByHandle = async (handle: string) => {
  const user = await User.findOne({ handle }).select("-password -email -_id");

  if (!user) throw Error("Usuario no encontrado");

  return user;
};
