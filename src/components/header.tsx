import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="flex-between border-b p-2 ">
      <nav className="flex-center">
        <Navigation />
        <span className=" ml-2 FONT-silkscreen">chriscoding.xyz</span>
      </nav>

      <div>
        {/* <span className="FONT-silkscreen">Welcome to the 🐐 template</span> */}
      </div>
      <div className="flex-center space-x-2 ">
        <Avatar className="w-8 h-8 border border-primary">
          <AvatarImage className="" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ThemeToggle />
      </div>
    </header>
  );
}
