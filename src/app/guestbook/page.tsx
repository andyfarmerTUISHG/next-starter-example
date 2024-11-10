import { Button, Card, CardBody, Textarea } from "@nextui-org/react";

export default function Guestbook() {
  return (
    <div className="mx-auto mt-4 max-w-lg">
      <h1 className="text-3xl font-bold">Guest Book</h1>

      <Card className="mt-4">
        <CardBody>
          <form className="flex flex-col gap-2">
            <Textarea
              label="Message"
              placeholder="Enter your Message"
              className="w-full"
            />
						<Button>Create</Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
