import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
// import mysql from "mysql2/promise";
import { createConnection } from "mysql2";

const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "drizzle",
});

const db = drizzle(connection);
await migrate(db, { migrationsFolder: "drizzle" });
await connection.end();