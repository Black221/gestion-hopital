

export const InputValue = ({label, value, className}) => {

    return(
        <>
            <div className={className}>
                <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>
                <p className="block w-full text-sm rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {value}
                </p>
            </div>
        </>
    )
}