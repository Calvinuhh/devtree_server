export default interface UserModel {
  _id: string;
  handle: string;
  name: string;
  email: string;
  password: string;
  description?: string;
  image?: string;
}

export type IUser = Omit<UserModel, "_id">;

export type LoginData = Pick<UserModel, "email" | "password">;

export type UserRequest = Omit<UserModel, "password">;

export type UpdateProfile = Pick<UserModel, "description" | "handle">;
