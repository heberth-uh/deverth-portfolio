import { useTranslation } from "react-i18next";

import html_svg from "../../../public/images/skills/html-icon.svg";
import css_svg from "../../../public/images/skills/css-icon.svg";
import js_svg from "../../../public/images/skills/js-icon.svg";
import ts_svg from "../../../public/images/skills/ts-icon.svg";
import next_svg from "../../../public/images/skills/nextjs-icon.svg";
import react_svg from "../../../public/images/skills/reactjs-icon.svg";
import tailwind_svg from "../../../public/images/skills/tailwind-icon.svg";
import bootstrap_svg from "../../../public/images/skills/bootstrap-icon.svg";
import sass_svg from "../../../public/images/skills/sass-icon.svg";
import python_svg from "../../../public/images/skills/python-icon.svg";
import express_svg from "../../../public/images/skills/expressjs-icon.svg";
import nodejs_svg from "../../../public/images/skills/nodejs-icon.svg";
import mongo_svg from "../../../public/images/skills/mongo-icon.svg";
import prisma_svg from "../../../public/images/skills/prisma-icon.svg";
import supabase_svg from "../../../public/images/skills/supabase-icon.svg";
import aws_svg from "../../../public/images/skills/aws-icon.svg";
import php_svg from "../../../public/images/skills/php-icon.svg";
import docker_svg from "../../../public/images/skills/docker-icon.svg";
import jenkins_svg from "../../../public/images/skills/jenkins-icon.svg";
import figma_svg from "../../../public/images/skills/figma-icon.svg";
import git_svg from "../../../public/images/skills/git-icon.svg";
import n8n_svg from "../../../public/images/skills/n8n-icon.svg";

import TitleSection from "../widgets/TitleSection";
import SkillCard from "../widgets/SkillCard";

function Skills() {
  const { t } = useTranslation("home");

  return (
    <div className="bg-white dark:bg-darker-blue" id="skills_section">
      <div className="container mx-auto py-16 px-6 xl:px-0 font-body">
        <div className="lg:w-4/5 xl:w-2/3 mx-auto">
          <TitleSection name={t("skills.title")} />

          <div className="text-center mt-8 md:my-12" id="skills_frontend">
            <div className="font-medium">
              <h4 className="text-lg md:text-2xl">
                <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-400 dark:via-cyan-300 dark:to-cyan-100">
                  FRONT-END
                </span>
              </h4>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                <SkillCard title="Next.js" imgUrl={next_svg} />
                <SkillCard title="React JS" imgUrl={react_svg} />
                <SkillCard title="JavaScript" imgUrl={js_svg} />
                <SkillCard title="TypeScript" imgUrl={ts_svg} />
                <SkillCard title="HTML" imgUrl={html_svg} />
                <SkillCard title="CSS" imgUrl={css_svg} />
                <SkillCard title="Tailwind" imgUrl={tailwind_svg} />
                <SkillCard title="Bootstrap" imgUrl={bootstrap_svg} />
                <SkillCard title="Sass" imgUrl={sass_svg} />
              </div>
            </div>
          </div>

          <div className="text-center mt-16 md:my-12" id="skills_backend">
            <div className="font-medium">
              <h4 className="text-lg md:text-2xl">
                <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-400 dark:via-cyan-300 dark:to-cyan-100">
                  BACK-END
                </span>
              </h4>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                <SkillCard title="Python" imgUrl={python_svg} />
                <SkillCard title="Node JS" imgUrl={nodejs_svg} />
                <SkillCard title="Express JS" imgUrl={express_svg} />
                <SkillCard title="Prisma ORM" imgUrl={prisma_svg} />
                <SkillCard title="Mongo DB" imgUrl={mongo_svg} />
                <SkillCard title="Supabase" imgUrl={supabase_svg} />
                <SkillCard title="AWS" imgUrl={aws_svg} />
                <SkillCard title="PHP" imgUrl={php_svg} />
                <SkillCard title="Docker" imgUrl={docker_svg} />
              </div>
            </div>
          </div>

          <div className="text-center mt-16 md:my-12" id="skills_other">
            <div className="font-medium">
              <h4 className="text-lg md:text-2xl">
                <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-400 dark:via-cyan-300 dark:to-cyan-100">
                  {t("skills.sections.other")}
                </span>
              </h4>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                <SkillCard title="Figma" imgUrl={figma_svg} />
                <SkillCard title="Git" imgUrl={git_svg} />
                <SkillCard title="Jenkins" imgUrl={jenkins_svg} />
                <SkillCard title="n8n" imgUrl={n8n_svg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
