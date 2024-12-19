import { Schema, model } from "mongoose";
import UserModel from "../interfaces/User.interface";

const userSchema = new Schema<UserModel>(
  {
    handle: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      minlength: 2,
      maxlength: 40,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 30,
      match: /^[a-zA-Z\s]+$/,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      match:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    versionKey: false,
  }
);

const User = model<UserModel>("user", userSchema);

export default User;
