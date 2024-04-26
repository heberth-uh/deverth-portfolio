import { createContext, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { menus_items as menu_items_data } from '../data/menu_items.js';
import { social_links as social_data } from '../data/social_links.js';
import { projects_links } from '../data/projects.js';

export const Context = createContext();

export function ContextProvider(props) {

    const [menuItems, setMenuItems] = useState([]);
    const [social, setSocial] = useState({});
    const [projects, setProjects] = useState([]);
    const [toggleShowMenu, setToggleShowMenu] = useState(false);
    const [toggleThemeSelection, setToggleThemeSelection] = useState(false);
    const [toggleLangSelection, setToggleLangSelection] = useState(false);
    const [theme, setTheme] = useState(localStorage.theme);
    const [themeMode, setThemeMode] = useState(!localStorage.theme ? 'system' : localStorage.theme);
    const [language, setLanguage] = useState('en')
    const themeDropdownRef = useRef();
    const langDropdownRef = useRef();
    const { t, i18n } = useTranslation('common');

    useEffect(() => {
        setMenuItems(menu_items_data);
        setSocial(social_data);
        setProjects(projects_links);
        const html = window.document.documentElement;

        if (toggleShowMenu) {
            html.classList.add('overflow-y-hidden')
        } else {
            html.classList.remove('overflow-y-hidden')
        }

        // Get the theme system theme if the theme mode is systen
        if (themeMode === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }

        // Get the default lenguage
        const lang = i18n.language.includes('en') ? 'en' : 'es'
        setLanguage(lang);

        // Set the class in the HTML tag according the current theme
        html.classList.remove('light', 'dark');
        html.classList.add(theme)

        let handleClickOutside = (e) => {
            // Catch clicking outside the theme dropdown selection
            if (!themeDropdownRef.current.contains(e.target)){
                setToggleThemeSelection(false);
            }
            // Catch clicking outside the language dropdown selection
            if (!langDropdownRef.current.contains(e.target)){
                setToggleLangSelection(false);
            }
        }
        // Catch the event on clicking outside the theme dropdown ref
        document.addEventListener('mousedown', handleClickOutside);
        // Cleaning up the listener of mousedown
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }

    }, [toggleShowMenu, theme])

    return (
        <Context.Provider value={{
            menuItems,
            social,
            projects,
            toggleShowMenu, setToggleShowMenu,
            toggleThemeSelection, setToggleThemeSelection,
            toggleLangSelection, setToggleLangSelection,
            theme, setTheme,
            language,
            themeMode, setThemeMode,
            themeDropdownRef,
            langDropdownRef
        }}>
            {props.children}
        </Context.Provider>
    )
}
