import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../context/Context";
// Icons
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
// SVG
import deverth from '../../../public/Deverth.svg';
import deverthDark from '../../../public/Deverth-dark.svg';

function Footer(){
    const { t } = useTranslation(['common','footer']);
    const navbar = t('navbar');
    const { social } = useContext(Context);
    return (
        <div className="bg-gray-100 dark:bg-dark-blue">
            <div className="container mx-auto pt-14 pb-5 px-6 xl:px-0 font-body">
                <div className="mb-6 lg:mb-2 pb-3 border-b-[1px] border-b-slate-600 lg:border-none">
                    <a href="/" className="flex justify-center lg:justify-start" aria-label="Link to the start">
                        <img src={deverth} className="h-10 lg:h-12 dark:hidden" alt="Deverth logo"/>
                        <img src={deverthDark} className="h-10 lg:h-12 hidden dark:block" alt="Deverth logo"/>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div id="socialMedia" className="mb-6">
                        <p className="text-slate-600 dark:text-sky-blue mb-3 text-sm lg:text-sm">{t('footer:socialMedia')}</p>
                        <ul className="text-content-blue dark:text-slate-400 text-sm">
                            <li className="hover:text-sky-blue dark:hover:text-slate-300 cursor-pointer mb-1">
                                <a href={social.linkedin} target="_blank" className="flex gap-2 items-center">
                                    <span><GrLinkedin/></span>
                                    <span>Linkedin</span>
                                </a>
                            </li>
                            <li className="hover:text-sky-blue dark:hover:text-slate-300 cursor-pointer mb-1">
                                <a href={social.github} target="_blank" className="flex gap-2 items-center">
                                    <span><GrGithub/></span>
                                    <span>Github</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-600 dark:text-sky-blue mb-3 text-sm lg:text-sm">{t('footer:sections')}</p>
                        <ul className="text-content-blue dark:text-slate-400 text-sm">{
                            navbar.map(item => (
                                <li key={item.id} className="hover:text-sky-blue dark:hover:text-slate-300 cursor-pointer mb-1">
                                    <a href={item.target} to='route'>&gt; {item.name}</a>
                                </li>
                            ))
                        }</ul>
                    </div>
                </div>
                <div id="credits" className="mt-8 text-center text-[0.7em] lg:text-sm text-slate-600 dark:text-slate-400">
                    {t('footer:copyright')}
                </div>
            </div>
        </div>
    )
}

export default Footer;
