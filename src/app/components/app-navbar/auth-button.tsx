"use client";

import {
	Avatar,
	Button,
	CircularProgress,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data, status } = useSession();

  if (status === "loading") {
    return <CircularProgress color="success" size="sm" aria-label="Loading authentication status..."/>;
  }
  if (status === "authenticated") {
    const signOutClick = () => {
      signOut({
        callbackUrl: "/",
      });
    };
    if (minimal) {
      return (
        <Button onClick={signOutClick} color="danger" variant="ghost">
          Sign Out
        </Button>
      );
    }

    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={data.user?.image || ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">
              {data.user?.name} - {data.user?.email}
            </p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={signOutClick}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/profile" })}
      color="danger"
      variant="ghost"
    >
      {minimal && <IconBrandGoogle />}
      Sign In
    </Button>
  );
}
