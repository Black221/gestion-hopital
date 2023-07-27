import {useEffect, useRef, useState} from "react";


export const InputForm = ({label, className, regex, required, type, getValue}) => {

    const userRef = useRef();

    const [value, setValue ] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isFocus, setIsFocus] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const res  = regex.test(value);
        setIsValid(res);
    }, [regex, value])

    useEffect(() => {

        if (isValid)
            getValue(value)
        else
            getValue("")
    }, [getValue, value, isValid])


    return (<>
        <div className={className}>
            <label htmlFor={label} className="block font-medium leading-6 text-gray-900" >
                {label} { value && !isValid && <span className={"text-xs text-red-500"}>no valid</span>}
            </label>
            {isFocus && ""}
            <div className="mt-2">
                <input id={label}
                       ref={userRef}
                       required={required}
                       aria-invalid={isValid}
                       className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                       type={type}
                       value={value}
                       onFocus={() => setIsFocus(true)}
                       onBlur={() => setIsFocus(false)}
                       onChange={(e) => setValue(e.target.value)}/>
            </div>
        </div>
    </>)
}