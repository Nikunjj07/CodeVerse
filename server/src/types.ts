import { Types } from "mongoose";

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ISubmission {
  _id: Types.ObjectId;
  user: Types.ObjectId | IUser;
  language: string;
  sourceCode: string;
  input?: string;
  output?: string;
  status?: string;
  error?: string;
  createdAt?: Date;
  updatedAt?: Date;
}