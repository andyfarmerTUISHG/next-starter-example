"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
	// Define same page navigation rather than full page changes
	const router = useRouter();
	return (
		<NextUIProvider
			navigate={router.push}
			className="h-full w-full flex flex-col">
			<NextThemesProvider attribute="class">
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
