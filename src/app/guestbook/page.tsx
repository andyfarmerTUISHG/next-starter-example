import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

import db from "@/db";

import GuestBookClientForm from "./page.client";

export default async function Guestbook() {
  // based on Schema relationship pull user datat
  const entries = await db.query.guestbookEntries.findMany({
    orderBy(fields, operators) {
      return operators.desc(fields.createdAt);
    },
    with: {
      user: true,
    },
  });

  return (
    <div className="mx-auto mt-4 max-w-lg">
      <h1 className="text-3xl font-bold">Guest Book</h1>

      <Card className="mt-4">
        <CardBody>
          <GuestBookClientForm />
          {/* <pre>{JSON.stringify(entries, null, 2)}</pre> */}
          {entries.map((entry) => (
            <Card className="full-w mt-4 border-1" key={entry.id}>
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src={entry.user?.image}
                  />
                  <div className="flex flex-col items-start justify-center gap-1">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      {`${entry.user?.name}`}
                    </h4>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p>{entry.message}</p>
              </CardBody>
              <CardFooter>
                <p>{entry.createdAt.toLocaleString()}</p>
              </CardFooter>
            </Card>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}
