"use client";

// form.tsx
import { useActionState } from "react";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Textarea } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import { insertGuestBookEntriesSchema } from "@/db/schema/guestbook-entries";

import { createGuestBookEntry } from "./actions";

export default function GuestBookClientForm() {
  const { status } = useSession();
  const [lastResult, action] = useActionState(createGuestBookEntry, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: insertGuestBookEntriesSchema });
    },

    // // Validate the form on blur event triggered
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  if (status !== "authenticated") {
    return (
      <div>
        <p className="mt-4 text-lg">Sign in to update the guestbook</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-2"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
    >
      <Textarea
        label="Message"
        key={fields.message.key}
        name={fields.message.name}
        placeholder="Enter your Message"
        isInvalid={!fields.message.valid}
        errorMessage={fields.message.errors}
        className="w-full"
      />
      <Button type="submit">Create</Button>
    </form>
  );
}
