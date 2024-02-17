import { useContext } from "react";
import { Context } from "../../context/Context";
import { GrFacebook, GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { useTranslation } from "react-i18next";

function Footer(){
    const { t, i18n } = useTranslation(['common','footer']);
    const navbar = t('navbar');
    const { menuItems } = useContext(Context);
    return (
        <div className="bg-gray-100 dark:bg-dark-blue">
            <div className="container mx-auto pt-14 pb-5 px-6 xl:px-0 font-body">
                <div className="mb-6 lg:mb-2 pb-3 border-b-[1px] border-b-slate-600 lg:border-none">
                    <a href="#">
                        <h5 className="text-content-blue dark:text-white font-extrabold text-xl md:text-lg text-center lg:text-start">
                            <span className="text-sky-blue">D</span>
                                everth
                            <span className="text-sky-blue">.</span>
                        </h5>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div id="socialMedia" className="mb-6">
                        <p className="text-slate-500 dark:text-slate-600 mb-1 text-sm lg:text-base">{t('footer:socialMedia')}</p>
                        <ul className="text-content-blue dark:text-slate-500 text-sm">
                            <li className="hover:text-slate-400 cursor-pointer mb-1">
                                <a href="" className="flex gap-2 items-center">
                                    <span><GrLinkedin/></span>
                                    <span>Linkedin</span>
                                </a>
                            </li>
                            <li className="hover:text-slate-400 cursor-pointer mb-1">
                                <a href="" className="flex gap-2 items-center">
                                    <span><GrGithub/></span>
                                    <span>Github</span>
                                </a>
                            </li>
                            <li className="hover:text-slate-400 cursor-pointer mb-1">
                                <a href="" className="flex gap-2 items-center">
                                    <span><GrFacebook/></span>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li className="hover:text-slate-400 cursor-pointer mb-1">
                                <a href="" className="flex gap-2 items-center">
                                    <span><GrInstagram/></span>
                                    <span>Instragram</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-500 dark:text-slate-600 mb-1 text-sm lg:text-base">{t('footer:sections')}</p>
                        <ul className="text-content-blue dark:text-slate-500 text-sm">{
                            navbar.map(item => (
                                <li key={item.id} className="hover:text-slate-400 cursor-pointer mb-1">
                                    <a href={item.target} to='route'>{item.name}</a>
                                </li>
                            ))
                        }</ul>
                    </div>
                </div>
                <div id="credits" className="mt-5 text-center text-[0.7em] lg:text-sm text-slate-600 dark:text-slate-700">
                    {t('footer:copyright')}
                </div>
            </div>
        </div>
    )
}

export default Footer;
