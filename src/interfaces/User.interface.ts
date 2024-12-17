export default interface UserModel {
  _id: string;
  handle: string;
  name: string;
  email: string;
  password: string;
}

export type IUser = Omit<UserModel, "_id">;

export type LoginData = Pick<UserModel, "email" | "password">;

export type UserRequest = Omit<UserModel, "password">;
