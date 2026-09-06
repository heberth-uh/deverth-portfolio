import { useContext } from "react";
import { Context } from "../../../context/Context";
import { useTranslation } from "react-i18next";
// Components
import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";

import { TECH_ICONS } from "./tech-icons";

import "./Projects.scss";

function Projects() {
  const { projects } = useContext(Context);
  const { t } = useTranslation("home");

  return (
    <section className="project" id="projects_section">
      <div className="container mx-auto px-6 project__inner">
        <SectionLabel number="03" label={t("projects.title")} />

        <div className="project__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={t(`projects.${project.name}.title`)}
              description={t(`projects.${project.name}.description`)}
              img={project.img}
              repository_link={project.links.repository_link}
              preview_link={project.links.preview_link}
              languages={TECH_ICONS.filter((lang) =>
                project.languages.includes(lang.name),
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
