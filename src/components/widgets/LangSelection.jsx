import { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslation } from "react-i18next";

import { TfiWorld } from "react-icons/tfi";
import { FaCheck } from "react-icons/fa";

import { PiTranslateBold } from "react-icons/pi";
import { BsTranslate } from "react-icons/bs";
import { PiTranslate } from "react-icons/pi";

function LangSelection() {

    const { language, langDropdownRef, toggleLangSelection, setToggleLangSelection } = useContext(Context);
    const { t, i18n } = useTranslation('common');

    function handleToggleLangSelection() {
        setToggleLangSelection(!toggleLangSelection);
    }
    
    // Method to change the language with i18next
    function handleChangeLanguage(lang) {
        i18n.changeLanguage(lang);
        setToggleLangSelection(false);
    }

    // Get the string classes for the selected theme
    function classSelectedItem(lang) {
        var stringClass = ''
        if (lang === language) {
            stringClass = 'dark:text-sky-blue text-sky-blue dark:bg-cyan-500/5 bg-cyan-50 font-semibold'
            return stringClass
        } else {
            return stringClass
        }
    }

    return (
        <div ref={langDropdownRef} className="relative min-w-[130px] md:min-w-0">
            <div className={`rounded-lg text-xl cursor-pointer mmd:mx-4 px-3 md:px-2 py-2 border-[1px] md:border-0 border-gray-300 dark:border-gray-500 md:bg-none hover:bg-slate-100 dark:hover:bg-slate-900 transition duration-150`}
            onClick={ () => handleToggleLangSelection()}>
                <span className="flex items-center justify-center gap-3 md:gap-2 text-xl text-content-blue dark:text-gray-400">
                    <TfiWorld/><span className="uppercase text-base">{i18n.language === 'en' ? 'EN' : 'ES'}</span>
                </span>
            </div>
            <div className={`absolute top-full right-0 md:right-0 md:mt-5 z-[90] min-w-full ${toggleLangSelection ? '' : 'hidden'}`}>
                <ul className="bg-white drop-shadow-sm dark:bg-slate-800 border border-gray-100 dark:border-gray-700 md:dark:border-gray-800 rounded-lg cursor-pointer overflow-hidden">
                    <li className={`text-content-blue dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-700 ${classSelectedItem('en')} px-5 py-3 flex gap-2 items-center justify-between`}
                    onClick={ () => handleChangeLanguage('en')}>
                        <span>{t('language.en')}</span><FaCheck className={`text-xs ${language === 'en' ? '' : 'hidden'}`}/>
                    </li>
                    <li className={`text-content-blue dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-700 ${classSelectedItem('es')} px-5 py-3 flex gap-2 items-center justify-between`}
                    onClick={ () => handleChangeLanguage('es')}>
                        <span>{t('language.es')}</span><FaCheck className={`text-xs ${language === 'es' ? '' : 'hidden'}`}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LangSelection;
