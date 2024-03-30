import { useTranslation } from "react-i18next";
// Icons
import { GrGithub } from "react-icons/gr";
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard({ title, description, img, repository_link, preview_link, languages }) {

    const { t } = useTranslation('home')
    return (
        <div className="lg:w-4/5 xl:w-2/3 bg-gray-50 dark:bg-darker-blue border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg shadow-gray-200 dark:shadow-sky-900/10 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col justify-between md:w-6/12 order-2 md:order-1 p-4 lg:px-6">
                    <div>
                        <h4 className="font-semibold text-lg text-content-blue dark:text-gray-100 mb-1 inline-block hover:underline">
                            <a href={preview_link} target="_blank">
                                {title}
                                <HiOutlineExternalLink className="inline-block text-base ml-1"/>
                            </a>
                        </h4>
                        <p className="text-content-blue dark:text-gray-300 text-pretty text-sm md:text-base font-extralight mb-3">
                            {description}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <a className="bg-gray-200 hover:bg-gray-300/80 dark:bg-gray-700/90 hover:dark:bg-gray-600/90 rounded-full px-2 cursor-pointer"
                            href={repository_link} target="_blank"
                        >
                            <div className="text-content-blue hover:text-content-blue/90 dark:text-gray-300 hover:dark:text-gray-100 text-base py-1 px-2">
                                <div className="flex items-center gap-x-1">
                                    <span className="text-sm">{t('projects.btnCode')}</span>
                                    <GrGithub/>
                                </div>
                            </div>
                        </a>
                        <div className="flex flex-wrap justify-end gap-2 items-center">
                            {languages.map( (lang, i) =>
                                <div key={i} className="bg-gray-200/90 dark:bg-gray-800/90 rounded-md px-1">
                                    <div className="text-content-blue dark:text-gray-400 text-base md:text-lg py-1 px-[0.15rem]">
                                        {lang.component}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="md:w-6/12 order-1 md:order-2">
                    <div className="flex justify-center items-center w-full h-full overflow-hidden">
                        <img src={img} alt="Imagen" className="object-cover w-full h-full hover:scale-110 transition delay-150 ease-in-out duration-500"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProjectCard;
