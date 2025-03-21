import React from "react";
import { useUser } from "@clerk/clerk-react";
import AdminHeader from "./AdminHeader";
import ManagerHeader from "./ManagerHeader";
import GuestHeader from "./GuestHeader";
import UserHeader from "./UserHeader";

function Header() {
  const { user, isSignedIn } = useUser();

  // Determine user role:
  // - If logged in and has a role, keep it.
  // - If logged in but has no role, set to "user".
  // - If NOT logged in, set to "guest".
  const userRole = isSignedIn ? user?.publicMetadata?.role || "user" : "guest";

  if (userRole === "admin") {
    return <AdminHeader />;
  } else if (userRole === "manager") {
    return <ManagerHeader />;
  } else if (userRole === "user") {
    return <UserHeader />;
  } else {
    return <GuestHeader />;
  }
}

export default Header;
