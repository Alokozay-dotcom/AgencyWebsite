import React, { createContext, useContext, useState, useEffect } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Custom hook to use theme in any component
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // Apply theme class and save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}

      {/* Floating toggle button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-gray-200 dark:bg-gray-800 dark:text-white transition"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
