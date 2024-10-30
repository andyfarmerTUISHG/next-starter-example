import { Card, CardBody, User } from "@nextui-org/react";
import { getServerSession } from "next-auth";

import options from "../config/auth";

export default async function Profile() {
  const session = await getServerSession(options);

  return (
    <div className="mx-auto mt-4 max-w-md">
      <h1 className="text-3xl font-bold">Profile {session?.user?.name}</h1>

      <Card className="mt-4">
        <CardBody>
          <User
            name={session?.user?.name}
            description={session?.user?.email}
            avatarProps={{
              showFallback: !session?.user?.image,
              src: session?.user?.image ? session?.user?.image : "",
            }}
          />
        </CardBody>
      </Card>
    </div>
  );
}
