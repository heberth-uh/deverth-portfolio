import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Context } from "../../../context/Context";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import deverth from "../../../../public/Deverth.svg";
import deverthDark from "../../../../public/Deverth-dark.svg";

import "./Footer.scss";

function Footer() {
  const { t } = useTranslation(["common", "footer"]);
  const navbar = t("navbar");
  const { social } = useContext(Context);
  const copyright = t("footer:copyright", { year: new Date().getFullYear() });

  return (
    <footer className="footer">
      <div className="container mx-auto px-6 footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label={t("common:link_home")}>
            <img src={deverth} className="dark:hidden" alt="Deverth logo" />
            <img
              src={deverthDark}
              className="hidden dark:block"
              alt="Deverth logo"
            />
          </a>
          <p className="footer__copyright hidden md:block">
            {copyright}
          </p>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <p className="footer__column-label">{t("footer:socialMedia")}</p>
            <ul className="footer__links">
              <li>
                <a
                  className="footer__link"
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href={social.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrGithub />
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <p className="footer__column-label">{t("footer:sections")}</p>
            <ul className="footer__links">
              {navbar.map((item) => (
                <li key={item.id}>
                  <a className="footer__link" href={item.target}>
                    &gt; {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="footer__copyright md:hidden">{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
