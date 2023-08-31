import useDebounce from "../../hooks/useDebounce.js";
import {useEffect, useState} from "react";


const DebouncedInput = ({type, getValue}) => {

    const [value, setValue] = useState(type === "text" ? "" : 0);

    const debouncedValue = useDebounce(value);

    useEffect(() => {
        getValue(debouncedValue ? debouncedValue : "");
    }, [debouncedValue])

    return (<>
        <div className={"mb-3"}>
            <input className={"border rounded p-1 w-80"} type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    </>)
}

export default DebouncedInput;