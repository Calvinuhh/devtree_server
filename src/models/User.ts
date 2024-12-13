import { Schema, model } from "mongoose";
import UserInterface from "../interfaces/User.interface";

const userSchema = new Schema<UserInterface>(
  {
    handle: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
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
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = model<UserInterface>("user", userSchema);

export default User;
