import { useContext } from "react";
import { Context } from "../../context/Context";

import { LuSun } from "react-icons/lu"; // Light mode icon
import { BsMoonStars } from "react-icons/bs"; // Dark mode icon

// Display the icon of the theme selected. Moon (dark), Sun (light).
function ThemeIcon () {

    const { theme, themeMode, toggleThemeSelection, setToggleThemeSelection } = useContext(Context)

    return (
        <div className={`rounded-lg text-xl cursor-pointer md:mx-4 px-3 md:px-2 py-2 border-[1px] md:border-0 border-gray-300 dark:border-gray-500 md:bg-none hover:bg-slate-100 dark:hover:bg-slate-900 ${themeMode == 'system' ? "text-content-blue dark:text-gray-400" : "text-sky-blue"} transition duration-150`}
        onClick={ () => setToggleThemeSelection(!toggleThemeSelection)}>
            {displayIcon()}
        </div>
    )
    // Choose the icon to render
    function displayIcon() {
        if (theme == 'dark') {
            return <div className="flex items-center justify-center gap-2">
                <BsMoonStars/>
                <span className="block md:hidden text-base">{themeMode === 'system' ? 'System' : 'Dark'}</span>
            </div>
        } else if (theme == 'light') {
            return <div className="flex items-center justify-center gap-2">
                <LuSun/>
                <span className="block md:hidden text-base">{themeMode === 'system' ? 'System' : 'Light'}</span>
            </div>
        } 
    }
}

export default ThemeIcon;
