import { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslation } from "react-i18next";

import ThemeIcon from "../widgets/ThemeIcon";

import { LuSun } from "react-icons/lu"; // Light mode icon
import { BsMoonStars } from "react-icons/bs"; // Dark mode icon
import { MdDisplaySettings } from "react-icons/md"; //System Options icon

function ThemeSelection () {

    const { t } = useTranslation('common');
    const { setTheme, themeDropdownRef } = useContext(Context)
    const { themeMode, setThemeMode } = useContext(Context)
    const { toggleThemeSelection, setToggleThemeSelection, } = useContext(Context)

    // Set the theme in the global context and in the state
    function handleDarkMode() {
        localStorage.theme = 'dark'
        setTheme('dark')
        setThemeMode('dark')
        setToggleThemeSelection(false)
    }
    function handleLightMode() {
        localStorage.theme = 'light'
        setTheme('light')
        setThemeMode('light')
        setToggleThemeSelection(false)
    }
    function handleSystemMode() {
        setThemeMode('system')
        setToggleThemeSelection(false)
        localStorage.removeItem('theme');
        // Check if the system has dark or light mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }

    // Listener event to catch the theme when the system theme is switched
    if (themeMode == 'system') {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newColorScheme = event.matches ? "dark" : "light";
            setTheme(newColorScheme)
        });
    }

    // Get the string classes for the selected theme
    function classSelectedMode(mode) {
        var stringClass = ''
        if (themeMode === mode) {
            stringClass = 'dark:text-sky-blue text-sky-blue dark:bg-cyan-500/5 bg-cyan-50 font-semibold'
            return stringClass
        } else {
            return stringClass
        }
    }

    return (
        <div ref={themeDropdownRef} className="relative min-w-[135px] md:min-w-0">
            <ThemeIcon/>
            <div className={`absolute top-full md:right-0 md:mt-5 z-[90] ${toggleThemeSelection ? '' : 'hidden'}`} >
                <ul className="bg-white drop-shadow-sm dark:bg-slate-800 border border-gray-100 dark:border-gray-700 md:dark:border-gray-800 rounded-lg cursor-pointer overflow-hidden">
                    <li className={`text-content-blue dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-700 ${classSelectedMode('dark')} px-5 py-3 flex items-center`}
                    onClick={() => handleDarkMode()}>
                        <span className="pr-3"><BsMoonStars/></span> { t('theme.dark')}
                    </li>
                    <li className={`text-content-blue dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-700 ${classSelectedMode('light')} px-5 py-3 flex items-center`}
                    onClick={() => handleLightMode()}>
                        <span className="pr-3"><LuSun/></span> { t('theme.light')}
                    </li>
                    <li className={`text-content-blue dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-700 ${classSelectedMode('system')} px-5 py-3 flex items-center`}
                    onClick={() => handleSystemMode()}>
                        <span className="pr-3"><MdDisplaySettings/></span> { t('theme.system')}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ThemeSelection;
