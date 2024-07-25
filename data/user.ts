import User from "@/models/userModel";
import { connectToMongoDB } from "../utils/connectdb";

export const getUserByEmail = async (email: string) => {
  try {
    await connectToMongoDB();
    const user = await User.findOne({ email }); // Use the User model

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    await connectToMongoDB();
    const user = await User.findOne({ _id: id }); // Use the User model
    return user;
  } catch {
    return null;
  }
};
