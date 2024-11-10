import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import users from "./users";


const guestbookEntries = pgTable("guestbook-entries", {
    id: uuid("id").primaryKey().defaultRandom(),
		userId: uuid("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
    message: text("message").notNull(),

    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),


});

// Schema for inserting a user - can be used to validate API requests
export const insertGuestBookEntriesSchema = createInsertSchema(guestbookEntries).omit({ id: true , userId: true, createdAt: true });
// Schema for selecting a user - can be used to validate API responses
export const selectGuestBookEntriesSchema = createSelectSchema(guestbookEntries);

export default guestbookEntries;
