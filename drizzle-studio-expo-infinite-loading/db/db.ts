import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";

export const rawDb = SQLite.openDatabaseSync("example.db");

export const db = drizzle(rawDb);
