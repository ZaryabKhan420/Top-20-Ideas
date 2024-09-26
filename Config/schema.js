import { numeric, pgTable, serial, varchar } from "drizzle-orm/pg-core";
export const ideas = pgTable("ideas", {
  id: serial("id").primaryKey(),
  createdBy: varchar("createdBy").notNull(),
  postedOn: varchar("postedOn").notNull(),
  idea: varchar("idea").notNull(),
  vote: numeric("vote").notNull(),
});
