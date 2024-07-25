import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { connectToMongoDB } from "./utils/connectdb";
import User from "./models/userModel";
import bcrypt from "bcrypt";

export const authConfig = {
  pages: {
    signIn: "/login",
    error: "/error",
  },

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          await connectToMongoDB();
          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;
          const isCorrect = await bcrypt.compare(
            credentials.password as any,
            user.password
          );
          if (!isCorrect) return null;
          return user;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
};
