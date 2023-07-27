

export const FloatingButton = ({onClick, disabled, title, rounded, position}) => {


    return (<>
        <div className={`absolute  ${position === "top" ? "top-24" : "bottom-12"} ${rounded ? "bg-green-500 w-20 h-20 flex items-center shadow-lg drop-shadow justify-center rounded-full" : ""} z-50 right-16`}>
            <button
                onClick={() => {
                    onClick(true);
                }}
                disabled={disabled}
                type="submit"
                className={`${rounded ? "text-4xl mb-2" : "rounded-md px-3 py-2"} bg-green-500 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`}
            >
                {title}
            </button>
        </div>
    </>)
}