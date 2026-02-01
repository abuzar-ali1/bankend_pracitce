import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      min_length: 1,
      max_length: 30,
      lowerccase: true,
    },
    password: {
      type: String,
      required: true,
      min_length: 6,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      min_length: 5,
      max_length: 100,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  },
);



 
export const User = mongoose.model('User' , userSchema);
