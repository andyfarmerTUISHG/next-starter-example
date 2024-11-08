import { Button, Card, CardBody } from "@nextui-org/react";

export default async function Home() {

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
