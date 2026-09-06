import { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { social_links as social_data } from "../data/social_links.js";
import { projects_links } from "../data/projects.js";

export const Context = createContext();

export function ContextProvider(props) {
  const [social, setSocial] = useState({});
  const [projects, setProjects] = useState([]);
  const [toggleShowMenu, setToggleShowMenu] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme());
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation("common");

  function getInitialTheme() {
    if (
      localStorage.theme == "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return "dark";
    } else {
      return "light";
    }
  }

  useEffect(() => {
    setSocial(social_data);
    setProjects(projects_links);
  }, []);

  useEffect(() => {
    const html = window.document.documentElement;

    if (toggleShowMenu) {
      html.classList.add("overflow-y-hidden");
    } else {
      html.classList.remove("overflow-y-hidden");
    }

    // Get the default lenguage
    const lang = i18n.language.includes("en") ? "en" : "es";
    setLanguage(lang);

    // Set the class in the HTML tag according the current theme
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }, [toggleShowMenu, theme, language, i18n.language]);

  return (
    <Context.Provider
      value={{
        social,
        projects,
        toggleShowMenu,
        setToggleShowMenu,
        theme,
        setTheme,
        language,
        setLanguage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
