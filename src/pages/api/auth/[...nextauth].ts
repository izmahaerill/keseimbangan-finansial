import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = {
          id: 1,
          email: email,
          password: password,
        };
        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account?.provider === "credentials") {
        token.email = user.email;
      }
      if (account?.provider === "google") {
        const data = {
          email: user.email,
          image: user.image,
          type: "google",
        };
      }
      console.log({ token, account, user });
      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      console.log(session, token);
      return session;
    },
  },
};

export default NextAuth(authOptions);
