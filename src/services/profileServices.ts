import User from "../models/User";
import { createHandle, manageHandle } from "../utils/manageHandle";

export const patchProfile = async (
  id: string,
  handle: string,
  description: string
) => {
  const newHandle = createHandle(handle);
  await manageHandle(newHandle);

  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      handle: newHandle,
      description,
    },
    { new: true }
  ).select("-password -name -email -_id");

  if (!updatedUser) throw Error("Usuario no encontrado");

  return updatedUser;
};
