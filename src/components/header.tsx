import React from "react";
import { ThemeToggle } from "./theme-toggle";

import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="flex-between border-b p-2">
      <div>
        <Navigation />
      </div>
      <div>
        <span className="FONT-silkscreen">Welcome to the 🐐 template</span>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
