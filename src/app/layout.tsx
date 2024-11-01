import type { Metadata } from "next";
import { Suspense } from "react";

import AppNavBar from "./components/app-navbar";
import Providers from "./components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next Starter",
  description: "My Next Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%2git 2http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        />
      </head>
      <body className="h-screen w-screen">
        <Providers>
          <AppNavBar />
          <main className="flex-grow">
            <Suspense>{children}</Suspense>
          </main>
        </Providers>
      </body>
    </html>
  );
}
