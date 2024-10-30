"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  // Define same page navigation rather than full page changes
  const router = useRouter();
  return (
    <SessionProvider>
      <NextUIProvider
        navigate={router.push}
        className="flex h-full w-full flex-col"
      >
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
