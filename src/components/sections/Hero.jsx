import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useTranslation, Trans } from 'react-i18next';
// Images
import hero_img from '../../../public/images/hero_img.png';
// Icons
import { BiChevronDown } from 'react-icons/bi';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Hero() {
    
    const { t, i18n } = useTranslation(['home', 'common']);
    const { toggleShowMenu, social } = useContext(Context)

    return (
        <section className="relative bg-white dark:bg-darker-blue" id="home">

            {/* Background pattern */}
            <div className="h-full w-full absolute bottom-0 left-0 bg-hero-pattern dark:bg-hero-pattern-dark bg-cover bg-no-repeat"></div>
            <div className="h-4/5 w-full absolute bottom-0 bg-gradient-to-b from-transparent to-white dark:to-dark-blue"></div>

            <div className="container relative mx-auto md:flex md:justify-between px-6 xl:px-0 py-16 lg:py-6 font-body">
                <div className='flex flex-col justify-center md:text-left'>
                    <p className='font-bold md:text-lg lg:text-xl text-sky-blue mb-2'>{t('hero.subtitle')}</p>
                    <h3 className="text-dark-blue dark:text-white font-extrabold text-[2.80rem] leading-none md:text-6xl lg:text-7xl lg:leading-[70px]">
                        <Trans i18nKey={t('hero.title')}
                            components={{ '1': <span className='text-sky-500 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 dark:to-cyan-100 to-sky-blue'/>}}
                        />
                    </h3>
                    <div className='mt-10'>
                        <p className='lg:text-xl text-content-blue dark:text-gray-300'>
                            <Trans i18nKey={ t('hero.description')}/>
                        </p>
                        <div className="flex justify-start gap-3 my-4 text-sm md:text-base">
                            <a href={social.github} target='_blank' className='border border-spacing-2 border-content-blue dark:border-gray-300 rounded-full py-1 px-3 cursor-pointer flex items-center justify-center gap-1 bg-gray-50 dark:bg-gray-800 text-content-blue hover:text-content-blue/90 dark:text-gray-300 hover:dark:text-gray-100 hover:scale-110 duration-150 ease-in-out'>
                                <FaGithub className='text-lg'/> GitHub
                            </a>
                            <a href={social.linkedin} target='_blank' className='border border-spacing-2 border-content-blue dark:border-gray-300 rounded-full py-1 px-3 cursor-pointer flex items-center justify-center gap-1 bg-gray-50 dark:bg-gray-800 text-content-blue hover:text-content-blue/90 dark:text-gray-300 hover:dark:text-gray-100 hover:scale-110 duration-150 ease-in-out'>
                                <FaLinkedin className='text-lg'/> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={hero_img} alt="developer" className='hidden md:block h-96 lg:h-auto z-[5]'/>
                    <div className="absolute z-[0] w-[16%] h-[28%] right-72 top-20 translate-x-1/2 translate-y-1/2 blue__gradient" />
                    <div className="absolute z-[0] w-[10%] h-[10%] right-1/3 bottom-52 translate-x-1/2 translate-y-1/2 green__gradient" />
                </div>
            </div>
            <div className='relative w-full z-[6]'>
                <div className='flex flex-col items-center'>
                    <a href='#about_section' className="mb-4 text-sm md:text-base cursor-pointer text-content-blue dark:text-gray-400 hover:text-sky-blue dark:hover:text-gray-300">
                        Let&apos;s get started
                        {/* la clase animate-bounce hace que se sobreponga el elemento span sobre el menú de Móvil, al abrir menú, se hace invisible, esto soluciona el bug */}
                        <span className={`flex flex-col items-center text-3xl animate-bounce ${toggleShowMenu ? 'invisible' : ''}`}>
                            <BiChevronDown/>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
