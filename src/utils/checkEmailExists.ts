import User from "../models/User";

const checkEmailExists = async (email: string) => {
  const emailExists = await User.findOne({ email });

  if (emailExists)
    throw Error(`User with email: ${emailExists.email} already exists`);
};

export default checkEmailExists;
