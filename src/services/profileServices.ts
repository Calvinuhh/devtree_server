import { UpdateProfile } from "../interfaces/User.interface";
import User from "../models/User";
import { createHandle, manageHandle } from "../utils/manageHandle";

export const patchProfile = async (
  id: string,
  handle: string,
  description: string
) => {
  const updatedFields: Partial<UpdateProfile> = {};

  if (handle) {
    const newHandle = createHandle(handle);
    await manageHandle(newHandle);
    updatedFields.handle = newHandle;
  }

  if (description) {
    updatedFields.description = description;
  }

  const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
    new: true,
  }).select("-password -name -email -_id");

  if (!updatedUser) throw Error("Usuario no encontrado");

  return updatedUser;
};

export const updateImage = async (id: string, image: string) => {
  const user = await User.findByIdAndUpdate(
    id,
    { image },
    { new: true }
  ).select("-password -name -email -_id -handle -description");

  if (!user) throw Error("Usuario no encontrado");

  return user;
};
