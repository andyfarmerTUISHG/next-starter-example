import { env } from "@/env/server";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options: NextAuthOptions = {
    pages: {
      // https://next-auth.js.org/configuration/pages
      signIn: "/login",
    },
    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET
      })
    ]
};

export default options;