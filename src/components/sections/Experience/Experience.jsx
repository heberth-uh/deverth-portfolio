import { useTranslation } from "react-i18next";

import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import ItemExperience from "../../ui/ItemExperience/ItemExperience";

import fourSecurityLogo from "../../../../public/images/companies/4security-white.png";
import simecLogo from "../../../../public/images/companies/simec-white.png";
import saintGobainLogo from "../../../../public/images/companies/saint-gobain-white.png";

import "./Experience.scss";

const companies = [
  { name: "4Security", logo: fourSecurityLogo },
  { name: "SIMEC", logo: simecLogo },
  { name: "Saint-Gobain", logo: saintGobainLogo },
];

function Experience() {
  const { t } = useTranslation("home");
  const experiences = t("experience.experiences");

  return (
    <section className="experience" id="experience_section">
      <div className="experience__pattern" />
      <div className="experience__fade" />

      <div className="container mx-auto px-6 experience__inner">
        <SectionLabel number="02" label={t("experience.title")} />

        <ul className="experience__timeline">
          {experiences.map((exp) => (
            <ItemExperience
              key={exp.id}
              period={exp.period}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
              isSchool={exp.education}
            />
          ))}
        </ul>

        <p className="experience__companies-label">
          {t("experience.companies")}
        </p>
        <div className="experience__companies">
          {companies.map((company) => (
            <img
              className="experience__company-logo"
              key={company.name}
              src={company.logo}
              alt={`${company.name} logo`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
