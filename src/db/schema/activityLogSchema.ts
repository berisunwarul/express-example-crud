import { pgTable, text } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";

export const activityLogs = pgTable('activity_logs', {
    id: serial('id').primaryKey(),
    action: text('action').notNull(),
    data: text('data').notNull(),
    created_at: timestamps.created_at,
});
