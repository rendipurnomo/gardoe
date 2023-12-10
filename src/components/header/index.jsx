import React from "react";
import DarkModeToggle from "../ui/Toggle";

const Header = () => {
  return (
    <header className="h-16 bg-primary flex justify-between items-center px-4">
      <div className="flex gap-4">
        <img className="h-12" src="/gardoe.webp" alt="logo" />
        <DarkModeToggle />
      </div>
      <p className="text-center text-xs text-white">
        © 2023 Development by. Rendev
      </p>
    </header>
  );
};

export default Header;
