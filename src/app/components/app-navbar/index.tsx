"use client";
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { IconPackages } from "@tabler/icons-react";
import { ThemeSwitcher } from "./theme-switcher";


export default function AppNavBar() {
  const mySiteName = "My To Do";
  const menuItems = [
    {
      label: "Home",
      href: "/	",
    }, {
      label: "Profile",
      href: "/profile",
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

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <IconPackages />
          <p className="font-bold text-inherit">

            {mySiteName}
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>

          <IconPackages />
          <p className="font-bold text-inherit">
            {mySiteName}
          </p>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}

      </NavbarContent>

      <NavbarContent justify="end">

        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex md:flex">
          <ThemeSwitcher showLabel={false} />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
				<NavbarMenuItem>
				<ThemeSwitcher showLabel={true} />
				</NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
