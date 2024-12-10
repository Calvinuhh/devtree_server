import { Schema, model } from "mongoose";
import UserInterface from "../interfaces/User.interface";

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = model<UserInterface>("user", userSchema);

export default User;
