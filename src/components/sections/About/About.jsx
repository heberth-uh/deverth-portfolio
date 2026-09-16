import { useTranslation, Trans } from "react-i18next";

import SectionLabel from "../../ui/SectionLabel/SectionLabel";
import TextAccent from "../../ui/TextAccent/TextAccent";

import "./About.scss";

function About() {
  const { t } = useTranslation("home");

  return (
    <section className="about" id="about_section">
      <div className="container mx-auto px-6 about__inner">
        <SectionLabel number="01" label={t("about.title")} />

        <p className="about__heading">
          <Trans
            i18nKey={t("about.subtitle")}
            components={{ 1: <TextAccent /> }}
          />
        </p>

        <p className="about__content">
          <Trans
            i18nKey={t("about.content")}
            components={{ 1: <strong className="about__emphasis" /> }}
          />
        </p>
      </div>
    </section>
  );
}

export default About;
