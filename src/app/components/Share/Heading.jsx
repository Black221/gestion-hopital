export const Heading = ({subtitle, title, text, position, width}) => {

    return (<>
        <div className={`bg-white pb-4 ${position === "center" && "text-center"} ${width === "md" && "max-w-md"}`} >
            <div className={`mx-auto max-w-screen-2xl px-4`}>
                <p className="mb-2 font-semibold text-blue-400 md:mb-3 capitalise text-end">{subtitle}</p>
                <h2 className="mb-2 text-xl font-bold text-gray-800 md:mb-6 ">{title}</h2>
                <p className=" text-gray-500 md:text-lg">{text}</p>
            </div>
        </div>
    </>)
}