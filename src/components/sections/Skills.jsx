import { useTranslation } from "react-i18next";

import html_svg from "../../../public/images/skills/html-icon.svg";
import css_svg from "../../../public/images/skills/css-icon.svg";;
import js_svg from "../../../public/images/skills/js-icon.svg";
import react_svg from "../../../public/images/skills/reactjs-icon.svg";
import tailwind_svg from "../../../public/images/skills/tailwind-icon.svg";
import bootstrap_svg from "../../../public/images/skills/bootstrap-icon.svg";
import bulma_svg from "../../../public/images/skills/bulma-icon.svg";
import python_svg from "../../../public/images/skills/python-icon.svg";
import express_svg from "../../../public/images/skills/expressjs-icon.svg";
import nodejs_svg from "../../../public/images/skills/nodejs-icon.svg";
import figma_svg from "../../../public/images/skills/firgma-icon.svg";
import git_svg from "../../../public/images/skills/git-icon.svg";
import responsive_icon from "../../../public/images/skills/responsive-icon.png";
import console_icon from "../../../public/images/skills/icons8-console.png";

import TitleSection from "../widgets/TitleSection";
import SkillCard from "../widgets/SkillCard";

function Skills() {

    const { t } = useTranslation('home');

    return (
        <div className="bg-white dark:bg-darker-blue" id="skills_section">
            <div className="container mx-auto py-16 px-6 xl:px-0 font-body">
                <TitleSection name={t('skills.title')} />

                <div className="text-center mt-8 md:my-12" id="skills_frontend">
                    <div className="font-medium">
                        <h4 className="text-lg md:text-2xl">
                            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-400 dark:via-cyan-300 dark:to-cyan-100">
                                FRONT-END
                            </span>
                        </h4>
                        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                            <SkillCard title="HTML" imgUrl={html_svg} />
                            <SkillCard title="CSS" imgUrl={css_svg} />
                            <SkillCard title="JS" imgUrl={js_svg} />
                            <SkillCard title="React JS" imgUrl={react_svg} />
                            <SkillCard title="Tailwind" imgUrl={tailwind_svg} />
                            <SkillCard title="Bootstrap" imgUrl={bootstrap_svg} />
                            <SkillCard title="Bulma" imgUrl={bulma_svg} />
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
                            <SkillCard title="Python" imgUrl={python_svg}/>
                            <SkillCard title="Node JS" imgUrl={nodejs_svg}/>
                            <SkillCard title="Express JS" imgUrl={express_svg}/>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 md:my-12" id="skills_other">
                    <div className="font-medium">
                        <h4 className="text-lg md:text-2xl">
                            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-blue via-sky-blue to-cyan-300 dark:from-cyan-400 dark:via-cyan-300 dark:to-cyan-100">
                                {t('skills.sections.other')}
                            </span>
                        </h4>
                        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                            <SkillCard title={t('skills.skills.responsive')} imgUrl={responsive_icon}/>
                            <SkillCard title="Figma" imgUrl={figma_svg}/>
                            <SkillCard title="Git" imgUrl={git_svg}/>
                            <SkillCard title="Terminal" imgUrl={console_icon}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills