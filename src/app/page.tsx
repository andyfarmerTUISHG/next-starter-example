import { Button, Card, CardBody } from "@nextui-org/react";
import { sql } from "drizzle-orm";

import db from "@/db";

export default async function Home() {
  const result = await db.execute(sql`
	select * from pg_catalog.pg_tables where schemaname = 'public'
	`);
  console.table(result);
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-3xl font-bold">Next.js + Tailwind CSS</h1>
        <p className="text-lg">Get started by editing src/app/page.tsx</p>
        <Button>Do Something</Button>
      </CardBody>
    </Card>
  );
}
