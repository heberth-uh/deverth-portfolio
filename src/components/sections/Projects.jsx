import { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslation } from "react-i18next";
// Components
import TitleSection from "../widgets/TitleSection";
import ProjectCard from "../widgets/ProjectCard";
// Icons
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiPrisma, SiMongodb } from "react-icons/si";
import { RiJavascriptFill, RiSupabaseFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

function Projects() {

    const { projects } = useContext(Context);
    const { t } = useTranslation('home')

    const langs = [
        {
            name: 'javascript',
            title: 'JavaScript',
            icon: <RiJavascriptFill/> },
        {
            name: 'typescript',
            title: 'TypeScript',
            icon: <BiLogoTypescript/> },
        {
            name: 'next',
            title: 'Next JS',
            icon: <SiNextdotjs/> },
        {
            name: 'react',
            title: 'React JS',
            icon: <FaReact/> },
        {
            name: 'express',
            title: 'Express.js',
            icon: <SiExpress/> },
        {
            name: 'node',
            title: 'Node.js',
            icon: <FaNodeJs/> },
        {
            name: 'python',
            title: 'Python',
            icon: <FaPython/> },
        {
            name: 'tailwind',
            title: 'TailWind CSS',
            icon: <BiLogoTailwindCss/> },
        {
            name: 'mysql',
            title: 'MySQL',
            icon: <GrMysql/> },
        {
            name: 'mongodb',
            title: 'MongoDB',
            icon: <SiMongodb/> },
        {
            name: 'prisma',
            title: 'Prisma',
            icon: <SiPrisma/> },
        {
            name: 'supabase',
            title: 'Supabase',
            icon: <RiSupabaseFill/> },
        {
            name: 'aws',
            title: 'AWS',
            icon: <FaAws/> },
    ]

    return (
        <div className="bg-gray-50 dark:bg-darker-blue" id="projects_section">
            <div className="container mx-auto py-16 px-6 xl:py-32 xl:px-0 font-body">

                <TitleSection name={t('projects.title')} />

                <div className="flex flex-col items-center my-10 gap-y-10">
                    {projects.map( (project, index) => (
                        <ProjectCard
                            key={index}
                            title={t(`projects.${project.name}.title`)}
                            description={t(`projects.${project.name}.description`)}
                            img={project.img}
                            repository_link={project.links.repository_link}
                            preview_link={project.links.preview_link ?? false}
                            languages={ langs.filter( lang => project.languages.includes(lang.name) ) }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;