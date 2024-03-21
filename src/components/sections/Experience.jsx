import TitleSection from "../widgets/TitleSection";
import ItemExperience from "../widgets/ItemExperience";
import { useTranslation } from "react-i18next";

// Images
import company1 from "../../../public/images/companies/4security.png";
import company1White from "../../../public/images/companies/4security-white.png";
import company2 from "../../../public/images/companies/simec.png";
import company2White from "../../../public/images/companies/simec-white.png";
import company3 from "../../../public/images/companies/saint-gobain.png";
import company3White from "../../../public/images/companies/saint-gobain-white.png";

function Experience() {

    const { t } = useTranslation('home');
    const experiences = t('experience.experiences');

    return (
        <div className="relative bg-white dark:bg-darker-blue py-10">
            {/* Background pattern */}
            <div className="h-full w-full absolute top-0 left-0 bg-hero-pattern dark:bg-hero-pattern-dark bg-cover bg-no-repeat"></div>
            <div className="h-4/5 w-full absolute top-0 bg-gradient-to-t from-transparent to-white via-white dark:to-darker-blue dark:via-darker-blue"></div>

            <div className="container relative mx-auto px-6 xl:px-0 py-16 lg:py-6 font-body">
                <TitleSection name={t('experience.title')}/>

                <article className="flex justify-center items-center my-10 md:my-20">
                    <ul className="w-full lg:w-4/5 xl:w-2/3">
                        {experiences.map( exp => (
                            <li className="mb-2" key={exp.id}>
                                <ItemExperience
                                    period={exp.period}
                                    duration={exp.duration}
                                    title={exp.title}
                                    subtitle={exp.subtitle}
                                    description={exp.description}
                                    isSchool={exp.education}
                                />
                            </li>
                        ))}
                    </ul>
                </article>
                <article className="py-0 mx-center container">
                    <h4 className="text-lg md:text-2xl text-center">
                        <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-400 dark:via-cyan-300 dark:to-cyan-100">
                            {t('experience.companies')}
                        </span>
                    </h4>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-y-14 md:gap-x-10 lg:gap-16 my-10">
                        <img src={company1} className='w-44 h-auto md:h-16 md:w-auto z-[5] dark:hidden' />
                        <img src={company1White} className='w-44 h-auto md:h-16 md:w-auto z-[5] hidden dark:block' />
                        <img src={company2} className='w-44 h-auto md:h-16 md:w-auto z-[5] dark:hidden' />
                        <img src={company2White} className='w-44 h-auto md:h-16 md:w-auto z-[5] hidden dark:block' />
                        <img src={company3} className='w-44 h-auto md:h-16 md:w-auto z-[5] dark:hidden' />
                        <img src={company3White} className='w-44 h-auto md:h-16 md:w-auto z-[5] hidden dark:block' />
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Experience;
