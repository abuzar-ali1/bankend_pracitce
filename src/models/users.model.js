import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = new Schema(
  {
    username: {
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


// before saving any password we need to hash it

userSchema.pre('save',  async function () {
  if(!this.isModified()) return null;
  this.password = await bcrypt.hash(this.password , 10);
})

 
// Compare passowrds 

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password , this.password); 
}

export const User = mongoose.model('User' , userSchema);
