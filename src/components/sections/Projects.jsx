import { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslation } from "react-i18next";
// Components
import TitleSection from "../widgets/TitleSection";
import ProjectCard from "../widgets/ProjectCard";
// Icons
import { GrGithub } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";


function Projects() {

    const { projects } = useContext(Context);
    const { t } = useTranslation('home')

    const langs = [
        {
            name: 'react',
            component: <FaReact/> },
        {
            name: 'tailwind',
            component: <SiTailwindcss/> },
        {
            name: 'express',
            component: <SiExpress/> },
        {
            name: 'javascript',
            component: <RiJavascriptFill/> },
    ]

    return (
        <div className="bg-gray-50 dark:bg-darker-blue" id="projects_section">
            <div className="container mx-auto py-16 px-6 xl:py-32 xl:px-0 font-body">

                <TitleSection name={t('projects.title')} />

                <div className="flex flex-col items-center my-10">
                    {projects.map( (project, index) => (
                        <ProjectCard
                            key={index}
                            title={t(`projects.${project.name}.title`)}
                            description={t(`projects.${project.name}.description`)}
                            img={project.img}
                            repository_link={project.links.repository_link}
                            preview_link={project.links.preview_link}
                            languages={ langs.filter( lang => project.languages.includes(lang.name) ) }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;