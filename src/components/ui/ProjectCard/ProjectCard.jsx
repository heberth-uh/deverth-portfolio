import { useTranslation } from "react-i18next";
// Icons
import { GrGithub } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

import "./ProjectCard.scss";

function ProjectCard({
  title,
  description,
  img,
  repository_link,
  preview_link,
  languages,
}) {
  const { t } = useTranslation(["home", "common"]);
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={img} alt={`Preview of ${title}`} />
        {preview_link ? (
          <a
            href={preview_link}
            target="_blank"
            rel="noreferrer"
            className="project-card__image--preview"
          >
            <div className="flex items-center gap-2">
              <span>{t("common:preview")}</span>
              <FaEye />
            </div>
          </a>
        ) : null}
      </div>
      <div className="project-card__content">
        <div>
          <h3 className="project-card__title">
            {preview_link ? (
              <a
                href={preview_link}
                className="project-card__title--link"
                target="_blank"
                rel="noreferrer"
              >
                {title}
                <LiaExternalLinkAltSolid className="inline-block text-sm" />
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="project-card__description">{description}</p>
        </div>

        <div className="project-card__footer">
          <a
            className="project-card__link"
            href={repository_link}
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub />
            <span>{t("projects.btnCode")}</span>
          </a>

          <div className="project-card__stack">
            {languages.map((lang) => (
              <div
                key={lang.id}
                title={lang.title}
                className="project-card__lang"
              >
                {lang.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
