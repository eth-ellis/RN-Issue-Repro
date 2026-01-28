import {
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const exampleTable = sqliteTable("example", {
  id: text().notNull().primaryKey(),
});