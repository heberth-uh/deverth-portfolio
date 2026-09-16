import { useContext } from "react";
import { Context } from "../../../context/Context";
import { useTranslation } from "react-i18next";

import "./ToggleLang.scss";

function ToggleLang() {
  const { language, setLanguage } = useContext(Context);
  const { t, i18n } = useTranslation("common");

  // Function to change the language with i18next
  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }

  // Get the string classes for the selected theme
  function activeClass(lang) {
    if (lang === language) {
      return "toggle-lang__lang--active";
    }
  }

  return (
    <div className="toggle-lang">
      <button
        onClick={() => handleChangeLanguage("en")}
        className={`toggle-lang__lang ${activeClass("en")}`}
        title={t("language.en")}
      >
        EN
      </button>
      <button
        onClick={() => handleChangeLanguage("es")}
        className={`toggle-lang__lang ${activeClass("es")}`}
        title={t("language.es")}
      >
        ES
      </button>
    </div>
  );
}

export default ToggleLang;
