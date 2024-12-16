import User from "../models/User";
import slug from "slug";

export const createHandle = (handle: string) => {
  return slug(handle, "");
};

export const manageHandle = async (handle: string) => {
  const handleExists = await User.findOne({ handle: createHandle(handle) });

  if (handleExists)
    throw Error(`Handle: ${createHandle(handle)} is already taken`);
};
