// app/serverActions/userActions.js
// import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { signIn } from "next-auth/react";

export async function authenticate({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await signIn("credentials", { email, password }); // Corrected typo here
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
}
