import {useEffect, useState} from "react";


const useDebounce = (value, delay = 500) => {

    const [debouncedValue, setDebouncedValue] = useState();

    useEffect(() => {
        let id = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => clearTimeout(id)
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;