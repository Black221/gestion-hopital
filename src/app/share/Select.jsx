

export const Select = ({ label, className, name, value, setValue, options }) => {

        return (
            <>
                <div className={className}>
                    <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
                    <select id={name}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}>
                        {options.map((option, index) => {
                            return (
                                <option key={index} value={option}>{option}</option>
                            )
                        })}
                    </select>
                </div>
            </>
        )
}