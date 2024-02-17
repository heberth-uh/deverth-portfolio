import AboutImg from '../../../public/images/aboout_img.png'
import TitleSection from "../widgets/TitleSection";
import { useTranslation, Trans } from 'react-i18next';

function About() {

  const { t } = useTranslation('home');

  return (
    <div className="bg-gray-50 dark:bg-dark-blue" id="about_section">
        <div className="container mx-auto py-16 px-6 xl:px-0 font-body">
            <TitleSection name={t('about.title')}/>

            <div className='flex-row md:flex items-center gap-6 my-10'>
              <div className='md:w-1/2 flex justify-center relative'>
                <img src={AboutImg} className='h-56 md:h-72 lg:h-80 xl:h-96'/>
                <div className="absolute z-0 w-[30%] h-[30%] right-1/2 top-20 translate-x-1/2 translate-y-1/2 -bg-green-500 cyan__gradient" />
              </div>
              
              <div className='md:w-1/2 mt-6 md:mt-0 xl:pr-16'>
                <p className=' text-content-blue dark:text-white text-4xl lg:text-5xl font-extrabold leading-9 lg:leading-tight'>
                  <Trans
                    i18nKey={ t('about.subtitle') }
                    components={ {
                      '1': <br className='hidden md:block'/>,
                      '2': <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-blue dark:from-cyan-400 via-sky-blue dark:via-cyan-300 to-cyan-300 dark:to-cyan-100'/>
                    } }
                  />
                </p>
                <p className='text-sm md:text-lg text-content-blue dark:text-gray-300 font-light mt-6 leading-relaxed'>
                  <Trans
                    i18nKey={ t('about.content')}
                    components={{
                      '1': <span className='text-transparent bg-clip-text bg-gradient-to-r font-semibold from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-300 dark:via-cyan-300 dark:to-cyan-100'/>,
                      '2': <span className='text-transparent bg-clip-text bg-gradient-to-r font-semibold from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-300 dark:via-cyan-300 dark:to-cyan-100'/>,
                      '3': <span className='text-transparent bg-clip-text bg-gradient-to-r font-semibold from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-300 dark:via-cyan-300 dark:to-cyan-100'/>,
                    }}
                  />
                </p>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default About