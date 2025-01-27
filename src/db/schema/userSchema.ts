import { pgTable, text } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').unique().notNull(),
    ...timestamps,
});
