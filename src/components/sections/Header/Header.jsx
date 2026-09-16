import { useContext } from "react";
import { Context } from "../../../context/Context";
import { useTranslation } from "react-i18next";
// Components
import ToggleTheme from "../../ui/ToggleTheme/ToggleTheme";
import ToggleLang from "../../ui/ToggleLang/ToggleLang";
// Icons
import { FiMenu, FiX } from "react-icons/fi";
// SVG
import deverth from "../../../../public/Deverth.svg";
import deverthDark from "../../../../public/Deverth-dark.svg";

import "./Header.scss";

function Header() {
  const { toggleShowMenu, setToggleShowMenu } = useContext(Context);
  const { t } = useTranslation("common");
  const navbar = t("navbar");

  const handleToggleMenu = () => {
    setToggleShowMenu(!toggleShowMenu);
  };

  const closeMenu = () => {
    setToggleShowMenu(false);
  };

  // This function displays the items for the .header__nav
  function displayMenuItems(navClass) {
    return (
      <div className={`header__nav ${navClass}`}>
        <ul>
          {navbar.map((item, index) => (
            <li key={item.id}>
              <a href={item.target} onClick={closeMenu}>
                {item.name}
                <span>{`0${index + 1}`}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="header__controls">
          <ToggleTheme />
          <ToggleLang />
        </div>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <div className="container mx-auto px-6">
          <div className="header__inner">
            <a href="/" aria-label={t("link_home")}>
              <img
                src={deverth}
                className="header__logo dark:hidden"
                alt="Deverth logo"
              />
              <img
                src={deverthDark}
                className="header__logo hidden dark:block"
                alt="Deverth logo"
              />
            </a>
            {displayMenuItems("header__nav--persistent")}
            <button
              type="button"
              onClick={handleToggleMenu}
              aria-label={t("navbar_toggle")}
              aria-expanded={toggleShowMenu}
              className={`header__burger ${toggleShowMenu ? "header__burger--open" : ""}`}
            >
              <span className="header__burger-icon header__burger-icon--menu">
                <FiMenu />
              </span>
              <span className="header__burger-icon header__burger-icon--close">
                <FiX />
              </span>
            </button>

            {/* Burger menu */}
            {toggleShowMenu ? (
              <>
                <div className="header__backdrop" onClick={closeMenu} />
                <div className="header__menu" tabIndex="-1">
                  {displayMenuItems("")}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
