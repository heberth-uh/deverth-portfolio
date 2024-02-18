import { MdSchool } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { Trans } from "react-i18next";

function ItemExperience( { period, duration, title, subtitle, description, isSchool } ) {
    return (
        <>
            <div className="relative flexitems-center" id="lineIndicator">
                <span className="absolute -top-1 left-[-0.7rem] text-gray-100 dark:text-sky-200 text-sm md:text-base">
                    <span className="bg-sky-900 dark:bg-sky-900 p-1 md:p-[0.30rem] rounded-full inline-block">
                        { isSchool ? <MdSchool/> : <MdOutlineWork/> }
                    </span>
                </span>
                <p className="ps-[18px] md:ps-8 font-extralight text-slate-400 text-xs md:text-sm">{period} ({duration})</p>
            </div>
            <div className="border-s-2 border-sky-900 ps-4 pb-10 md:ps-8">
                <h3 className="flex items-center flex-wrap lg:flex-nowrap sm:gap-1 md:gap-1 lg:gap-3 my-2 leading-5">
                    <span className="text-sky-blue font-bold md:text-xl">{title}</span>
                    <span className="dark:text-gray-100 text-content-blue text-content font-bold dmd:text-lg">{subtitle}</span>
                </h3>
                <p className="text-content-blue dark:text-gray-300 text-sm md:text-base font-light">
                    <Trans i18nKey={description} components={{'strong': <strong className="dark:text-gray-200" />}}
                    />
                </p>
            </div>
        </>
    )
}

export default ItemExperience;
