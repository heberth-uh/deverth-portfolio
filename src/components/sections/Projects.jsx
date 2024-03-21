import TitleSection from "../widgets/TitleSection";
import { useTranslation } from "react-i18next";
// Components
import ProjectCard from "../widgets/ProjectCard";
// Images
import imgFootballClub from "../../../public/images/projects/project-football-club.png";
// Icons
import { GrGithub } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Projects() {

    const { t } = useTranslation('home')

    return (
        <div className="bg-gray-50 dark:bg-darker-blue" id="projects_section">
            <div className="container mx-auto py-16 px-6 xl:px-0 font-body">

                <TitleSection name={t('projects.title')} />

                <div className="flex flex-col items-center my-10">
                    <ProjectCard
                        title={t('projects.footballClub.title')}
                        description={t('projects.footballClub.description')}
                        img={imgFootballClub}
                        url={t('projects.footballClub.url')}
                        languages={[
                            <FaReact/>,
                            <SiTailwindcss/>
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;