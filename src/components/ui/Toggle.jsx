import { Sun, Moon } from "@phosphor-icons/react";
import { useTheme } from "../themeProvider";
import { useState } from "react";
function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState("light");
  const { setTheme } = useTheme();

  const handleDarkMode = () => {
    if (isDarkMode === "light") {
      setTheme("dark");
      setIsDarkMode("dark");
    } else {
      setTheme("light");
      setIsDarkMode("light");
    }
  };

  return (
    <button
      className="p-2 bg-white/30 rounded-xl flex gap-2 items-center text-green-900 dark:text-white dark:bg-black/40"
      onClick={handleDarkMode}
    >
      Mode{isDarkMode === "light" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}

export default DarkModeToggle;
