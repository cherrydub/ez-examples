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
import Link from "next/link";

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
          //asChild allows this to autoclose when nav link is clicked or outside
          <DropdownMenuItem asChild key={route.pathname}>
            <Link href={route.pathname}>{route.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
