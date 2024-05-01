import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Grip } from "lucide-react";

const navRoutes = [
  { pathname: "/", name: "Home" },
  { pathname: "/about", name: "About" },
  { pathname: "/contact", name: "Contact" },
  { pathname: "/blog", name: "Blog" },
  { pathname: "/projects", name: "Projects" },
  { pathname: "/fonts", name: "Fonts" },
  { pathname: "/forms", name: "Forms" },
];

export default function Navigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {" "}
        <Grip />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {navRoutes.map((route) => (
          <DropdownMenuItem key={route.pathname}>{route.name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
