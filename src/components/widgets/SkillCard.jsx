function SkillCard({title, imgUrl}) {
    return(
        <div className="hover:scale-105 hover:-translate-y-1 duration-150 w-[80px] md:w-[100px] h-[100px] md:h-[110px]">
            <div className="bg-gradient-to-tl from-sky-400/10 via-sky-300/10 to-sky-200/10 dark:from-sky-900/30 dark:via-violet-300/10 dark:to-teal-200/10 w-full h-full rounded-2xl drop-shadow-2xl">
                <div className="d-flex justify-center text-center py-6 px-5">
                    <div className="mb-2">
                        <img className="h-8 md:h-[40px] mx-auto" src={imgUrl}/>
                    </div>
                    <div className="text-[10px] text-content-blue/70 dark:text-gray-100 md:text-xs font-extralight ">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard;
