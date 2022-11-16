
import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.theme === "dark");

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

    };

    useEffect(() => {
        const html = window.document.documentElement;

        const prevTheme = isDarkMode ? "light" : "dark";
        html.classList.remove(prevTheme);

        const nextTheme = isDarkMode ? "dark" : "light";
        html.classList.add(nextTheme);

        localStorage.setItem("theme", nextTheme);
}, [isDarkMode]);

return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
