import { UUID } from 'mongodb';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    id: {
      type: String,
      default: () => crypto.randomUUID().toString(),
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

export default User;