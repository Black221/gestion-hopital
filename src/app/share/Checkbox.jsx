

export const Checkbox = ({ label, name, value, setValue, options }) => {

    return (
        <>
            <div className="mt-4">
                <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
                {options.map((option, index) => {
                    return (
                        <div key={index} className="mt-2">
                            <input type="checkbox"
                                   id={option.value}
                                   name={name}
                                   value={option.value}
                                   checked={value === option.value}
                                   onChange={(e) => setValue(e.target.value)}/>
                            <label htmlFor={option.value} className="ml-2 text-sm font-medium leading-6 text-gray-900">{option.label}</label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}