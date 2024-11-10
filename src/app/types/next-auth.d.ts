import { DefaultSession } from "next-auth";
// overwrite next-auth types
declare module "next-auth" {
	interface Session {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}
