
import { migrate } from "drizzle-orm/tidb-serverless/migrator";

import { env } from "@/env/server";
import db, { client } from "./index";

import config from "@/../drizzle.config";

//Return early if we are not migrating
if (!env.DB_MIGRATING) {
    throw new Error("❌ You must set DB_MIGRATING to true when migrating");
}

await migrate(db, { migrationsFolder: config.out! });

await client.end();