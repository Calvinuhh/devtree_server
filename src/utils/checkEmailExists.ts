import User from "../models/User";

const checkEmailExists = async (email: string) => {
  const emailExists = await User.findOne({ email });

  if (emailExists) throw Error(`Ya existe un usuario con ese Email`);
};

export default checkEmailExists;
