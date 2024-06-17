import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Navigation from "./navigation";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex-between border-b p-2 ">
      <nav className="flex-center">
        <Navigation />
        <Link href="/">
          <span className=" ml-2 FONT-silkscreen text-primary">
            chriscoding.xyz
          </span>
        </Link>
      </nav>

      <div>
        {/* <span className="FONT-silkscreen">Welcome to the 🐐 template</span> */}
      </div>
      <div className="flex-center space-x-2 ">
        <a href="https://twitter.com/chriscodingxyz" target="_blank">
          <Avatar className="w-8 h-8 border border-primary hover:scale-110 transition">
            <AvatarImage src="punk1534.png" />
            <AvatarFallback>🍒</AvatarFallback>
          </Avatar>
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
}
