import TitleSection from "../widgets/TitleSection";
import { useTranslation, Trans } from "react-i18next";

function About() {
  const { t } = useTranslation("home");

  return (
    <div className="bg-gray-50 dark:bg-dark-blue" id="about_section">
      <div className="container mx-auto py-16 xl:py-32 px-6 xl:px-0 font-body">
        <div className="lg:w-4/5 xl:w-2/3 mx-auto">
          <TitleSection name={t("about.title")} />
          <p className=" text-content-blue dark:text-white text-4xl lg:text-5xl font-extrabold leading-9 lg:leading-tight">
            <Trans
              i18nKey={t("about.subtitle")}
              components={{
                1: <br className="hidden md:block" />,
                2: (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue dark:from-cyan-400 via-sky-blue dark:via-cyan-300 to-cyan-300 dark:to-cyan-100" />
                ),
              }}
            />
          </p>
          <p className="text-sm md:text-lg text-content-blue dark:text-gray-300 font-light mt-6 leading-relaxed">
            <Trans
              i18nKey={t("about.content")}
              components={{
                1: (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r font-semibold from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-300 dark:via-cyan-300 dark:to-cyan-100" />
                ),
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
