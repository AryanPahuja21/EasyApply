import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/app/lib/db";
import { User } from "../../../models/User";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  callbacks: {
    async signIn({ user }) {
      await connectToDatabase();

      console.log("User:", user);
      console.log("Email:", user.email);
      console.log("Name:", user.name);
      console.log("Image:", user.image);

      if (!user.email) {
        return false;
      }

      try {
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          await User.create({
            email: user.email,
            name: user.name,
            image: user.image,
          });
        }
      } catch (e) {
        console.error("Database error:", e);
        return false;
      }

      return true;
    },
  },
});

export { handler as GET, handler as POST };
