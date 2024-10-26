import { useState, useEffect } from "react";

// Options
const themeData = {
  "sunset-serenity-dark": {
    name: "Sunset Serenity Dark",
    value: "sunset-serenity-dark",
  },
  "sunset-serenity-light": {
    name: "Sunset Serenity Light",
    value: "sunset-serenity-light",
  },
};

// Theme class
function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || themeData["sunset-serenity-light"].value
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme =
      theme === themeData["sunset-serenity-dark"].value
        ? themeData["sunset-serenity-light"].value
        : themeData["sunset-serenity-dark"].value;
    setTheme(newTheme);
  };

  return { theme, toggleTheme, themeData };
}

export default useTheme;
