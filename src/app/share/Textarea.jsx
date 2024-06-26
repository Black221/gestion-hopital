

export const Textarea = ({label, value, setValue, className, row, disabled}) => {

    return (<>
        <div className={className}>
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    disabled={disabled}
                    id="about"
                    value={value}
                    rows={row}
                    onChange={(e) => setValue(e.target.value)}
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    </>)
}