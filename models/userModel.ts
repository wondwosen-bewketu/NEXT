// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a User item using TypeScript interfaces
export interface IUser {
  username: string;
  email: string;
  password: string;
}

// Merging IUser interface with mongoose's Document interface to create
// a new interface that represents a User document in MongoDB
export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the User document, specifying the types
// and constraints
const UserSchema = new mongoose.Schema<IUserDocument>(
  {
    username: {
      type: String,
      required: [true, "Username is required"], // Added custom error message
      trim: true, // Trims whitespace from both ends of the string
      minlength: [3, "Username must be at least 3 characters long"], // Added minlength validation
    },
    email: {
      type: String,
      required: [true, "Email is required"], // Added custom error message
      lowercase: true, // Converts the email to lowercase
      trim: true, // Trims whitespace from both ends of the string
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ], // Email format validation
    },
    password: {
      type: String,
      required: [true, "Password is required"], // Added custom error message
      minlength: [6, "Password must be at least 6 characters long"], // Added minlength validation
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
    // Optionally, you can add other schema options here
  }
);

// Creating a mongoose model for the User document
const User: Model<IUserDocument> =
  mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema);

export default User;
