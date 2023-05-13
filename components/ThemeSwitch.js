import DarkTheme from "./DarkTheme";
import { useState } from "react";
("use client");

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return {
      darkMode: false,
    };
  }
  // Perform localStorage action
  const value = localStorage.getItem("darkMode");

  return {
    darkMode: value === null ? false : JSON.parse(value),
  };
}

function ThemeSwitch() {
  const [state, setState] = useState(loadDarkMode);

  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!state.darkMode));
    setState({ ...state, darkMode: !state.darkMode });
  };

  // console.log("[Theme Switch] darkmode: ", darkMode);
  const text = state.darkMode ? "Light Mode" : "Dark mode";

  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>
      {state.darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
