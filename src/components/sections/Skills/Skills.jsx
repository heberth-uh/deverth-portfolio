import { useTranslation } from "react-i18next";

import SkillCard from "../../ui/SkillCard/SkillCard";
import SectionLabel from "../../ui/SectionLabel/SectionLabel";

import "./Skills.scss";
import { SKILL_GROUPS } from "./skills-data";

function Skills() {
  const { t } = useTranslation("home");

  return (
    <section className="skills" id="skills_section">
      <div className="container mx-auto px-6">
        <SectionLabel number="04" label={t("skills.title")} />

        <div className="skills__wrapper">
          {SKILL_GROUPS.map((group) => (
            <div key={group.id} className="skills__group">
              <h3 className="skills__group-name">
                {t(`skills.groups.${group.id}`)}
              </h3>

              <div className="skills__grid">
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    title={skill.name}
                    iconLight={skill.iconLight}
                    iconDark={skill.iconDark}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
