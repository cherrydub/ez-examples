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
import { Grip, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

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
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex FONT-silkscreen">
          <motion.span
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Grip />
          </motion.span>
        </div>
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
          <Moon className=" h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Switch
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />{" "}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
