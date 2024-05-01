"use client";

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
import { ThemeToggle } from "./theme-toggle";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navRoutes = [
  { pathname: "/", name: "Home" },
  { pathname: "/about", name: "About" },
  { pathname: "/contact", name: "Contact" },
  { pathname: "https://blog.cherrydub.com/", name: "Blog" },
  { pathname: "/projects", name: "Projects" },
  //   { pathname: "/fonts", name: "Fonts" },
  { pathname: "/tutorials", name: "Tutorials" },
  { pathname: "/memes", name: "Memes" },
  //   { pathname: "/forms", name: "Forms" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Grip />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {navRoutes.map((route) => (
          <DropdownMenuItem asChild key={route.pathname}>
            {route.pathname.startsWith("http") ? (
              <div>
                <a
                  href={route.pathname}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {route.name}
                </a>
                <i className="las la-external-link-alt"></i>
              </div>
            ) : (
              <Link
                className={cn(
                  pathname === route.pathname &&
                    "font-bold text-primary no-underline"
                )}
                href={route.pathname}
              >
                {route.name}
              </Link>
            )}
          </DropdownMenuItem>
        ))}
        <br />
        <div className="flex justify-between items-center">
          {/* <ContactIcons /> */}
          <ThemeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
