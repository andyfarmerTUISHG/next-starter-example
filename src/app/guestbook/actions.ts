"use server"; // action.ts - https://conform.guide/integration/nextjs

import db from "@/db";
import guestbookEntries, { insertGuestBookEntriesSchema } from "@/db/schema/guestbook-entries";
import { parseWithZod } from "@conform-to/zod";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import options from "../config/auth";
import requireAuth from "../utils/require-auth";

export async function createGuestBookEntry(prevState: unknown, formData: FormData) {

	await requireAuth();
	const session = (await getServerSession(options))!;

  const submission = parseWithZod(formData, {
    schema: insertGuestBookEntriesSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

	await db.insert(guestbookEntries).values({
		id: session?.user.id,
		message: submission.value.message
	});

	//Make sure Next.js revalidate the page and queries the database
	revalidatePath("/guestbook");
  redirect("/guestbook");
}
