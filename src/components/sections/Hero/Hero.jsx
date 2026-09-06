import { useContext } from "react";
import { Context } from "../../../context/Context";
import { useTranslation, Trans } from "react-i18next";
// Icons
import { BiChevronDown } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

import TextAccent from "../../ui/TextAccent/TextAccent";
import "./Hero.scss";

function Hero() {
  const { t } = useTranslation(["home", "common"]);
  const { toggleShowMenu, social } = useContext(Context);

  return (
    <section className="hero" id="home">
      <div className="hero__pattern" />
      <div className="hero__fade" />

      <div className="container mx-auto px-6 hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-mark">&gt;</span> {t("hero.subtitle")}
        </p>

        <h1 className="hero__title">
          <Trans i18nKey={t("hero.title")} components={{ 1: <TextAccent /> }} />
        </h1>

        <p className="hero__description">
          <Trans i18nKey={t("hero.description")} />
        </p>

        <div className="hero__links">
          <a
            className="hero__link"
            href={social.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hero__link-icon" />
            <span>GitHub</span>
          </a>
          <a
            className="hero__link"
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hero__link-icon" />
            <span>LinkedIn</span>
          </a>
          <a className="hero__link" href={`mailto:${social.email}`}>
            <MdMail className="hero__link-icon" />
            <span>{t("hero.button_contact")}</span>
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <a
          href="#about_section"
          className={`hero__scroll-link ${toggleShowMenu ? "hero__scroll-link--hidden" : ""}`}
        >
          {t("hero.button_start")}
          <BiChevronDown className="hero__scroll-icon" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
