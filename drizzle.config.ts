import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    dialect: "mysql",
    out: "./src/drizzle/migrations",
    dbCredentials: {
        host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: "drizzle",
    },
})