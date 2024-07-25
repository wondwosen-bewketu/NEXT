// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToMongoDB } from "./utils/connectdb";
import User from "./models/userModel";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";
import { getUserById } from "@/data/user";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      // Custom token fields
      //   (token.name = existingUser.name),
      token.email = existingUser.email;
      // (token.image = existingUser.image),
      // (token.role = existingUser.role);?
      //   token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
});``
