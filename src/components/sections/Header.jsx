import { useContext } from "react"
import { Context } from '../../context/Context'
import { useTranslation } from "react-i18next";
// Components
import ThemeSelection from "../widgets/ThemeSelection";
import LangSelection from "../widgets/LangSelection";
// Ions
import { FiMenu, FiX } from "react-icons/fi";
// SVG
import deverth from '../../../public/Deverth.svg';
import deverthDark from '../../../public/Deverth-dark.svg';

function Header() {

    const { toggleShowMenu, setToggleShowMenu } = useContext(Context);
    const { t } = useTranslation('common')
    const navbar = t('navbar');

    // This function displays the items from the navbar
    function displayMenuItems(dispayClass) {
        return (
            <div className="md:flex items-center">
                <ul>
                    {navbar.map(item => (
                        <li key={item.id} className={`${dispayClass} mx-2 mb-2 py-2`}>
                            <a href={item.target} className={`py-2 text-content-blue dark:text-gray-400 hover:text-sky-blue dark:hover:text-cyan-400`} onClick={() => setToggleShowMenu(false)}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between flex-wrap md:flex-nowrap gap-x-1 gap-y-2 items-center border-t-[1px] md:border-t-0 border-gray-200 dark:border-gray-600 pt-4 md:pt-0">
                    <ThemeSelection/>
                    <LangSelection/>
                </div>
            </div>
        )
    }

    return (
        <div className="sticky bg-white dark:bg-darker-blue border-b-[2px] border-slate-100/75 dark:border-slate-900 top-0 left-0 w-full py-3 md:py-3 z-30">
            <div className="container relative mx-auto px-6 xl:px-0 flex justify-between font-body">
                <a href="/" className="flex self-center" aria-label="Link to the start">
                    <img src={deverth} className="h-8 lg:h-10 dark:hidden" alt="Deverth logo"/>
                    <img src={deverthDark} className="h-8 lg:h-10 hidden dark:block" alt="Deverth logo"/>
                </a>
                <div className="md:flex hidden items-center">
                    {/* Render navbar items */}
                    {displayMenuItems('inline')}
                </div>
                <div onClick={ () => setToggleShowMenu(!toggleShowMenu)}
                    className='my-auto text-content-blue dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 md:hidden z-[50]'>
                    { toggleShowMenu ? <FiX/> : <FiMenu/> }
                </div>
                {/* Navbar burger */}
                {
                    !toggleShowMenu ? "" :
                    <div  className="absolute top-full left-0 right-0 md:hidden" tabIndex="-1">
                        <div className="fixed bottom-0 right-0 left-0 top-[52px] z-[40] backdrop-blur bg-gray-300/30 dark:bg-transparent" onClick={ () => setToggleShowMenu(false) }/>
                        <div className="absolute top-full left-0 right-0 p-4 mt-4 mx-6 rounded-xl z-[50] bg-gray-50 dark:bg-slate-800 drop-shadow-2xl dark:drop-shadow-4xl md:hidden">
                            {displayMenuItems('')}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header
