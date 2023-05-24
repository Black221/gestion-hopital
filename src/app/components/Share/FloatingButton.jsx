

export const FloatingButton = ({onClick, disabled, title}) => {


    return (<>
        <div className={`absolute bottom-20 right-20 z-50`}>
            <button
                onClick={() => {
                    onClick(true);
                    console.log("hey")
                }}
                disabled={disabled}
                type="submit"
                className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                {title}
            </button>
        </div>
    </>)
}