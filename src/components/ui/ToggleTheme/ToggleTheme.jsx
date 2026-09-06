import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../../context/Context";

import { LuSun } from "react-icons/lu"; // Light mode icon
import { IoMoonOutline } from "react-icons/io5"; // Dark mode icon

import "./ToggleTheme.scss";

function ToggleTheme() {
  const { theme, setTheme } = useContext(Context);
  const { t } = useTranslation("common");

  // Set the theme in the global context and in the state
  function handleDarkMode() {
    localStorage.theme = "dark";
    setTheme("dark");
  }
  function handleLightMode() {
    localStorage.theme = "light";
    setTheme("light");
  }

  function handleToggleTheme() {
    theme === "dark" ? handleLightMode() : handleDarkMode();
  }

  return (
    <button
      className="toggle-theme"
      onClick={handleToggleTheme}
      aria-label={t(`theme.${theme}`)}
    >
      <span className="toggle-theme__mode">
        {theme === "dark" ? <IoMoonOutline /> : <LuSun />}
      </span>
    </button>
  );
}

export default ToggleTheme;
