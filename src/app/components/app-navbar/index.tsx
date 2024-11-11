"use client";

import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import { IconPackages } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

import AuthButton from "./auth-button";
import { ThemeSwitcher } from "./theme-switcher";

export default function AppNavBar() {
  const { status } = useSession();

  const mySiteName = "My To Do";
  const menuItems = [
    {
      label: "Home",
      href: "/	",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Activity",
      href: "/activity",
    },
    {
      label: "Analytics",
      href: "/analytics",
    },
    // {
    //   label: "System",
    //   href: "/system",
    // },
    // {
    //   label: "Deployments",
    //   href: "/deployments",
    // },
    // {
    //   label: "My Settings",
    //   href: "/my-settings",
    // },
    // {
    //   label: "Team Settings",
    //   href: "/team-settings",
    // },
    // {
    //   label: "Help & Feedback",
    //   href: "/help-and-feedback",
    // },
    // {
    //   label: "Log Out",
    //   href: "/log-out",
    // },
  ];
  if (status === "authenticated") {
    menuItems.push(
      {
        label: "Guest Book",
        href: "/guestbook",
      },
      { label: "Profile", href: "/profile" }
    );
  }

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <IconPackages />
          <p className="font-bold text-inherit">{mySiteName}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher showLabel={false} />
        </NavbarItem>
        <NavbarItem>
          <AuthButton minimal={false} />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <ThemeSwitcher showLabel={true} />
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <AuthButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
