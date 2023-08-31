import {useEffect, useState} from "react";
import {useCountdownSeconds} from "./useCountdown.js";


const useAxiosFunction = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [controller, setController] = useState(null);
    const  [counting, seconds, start, stop, reset] = useCountdownSeconds(4);


    const axiosFetch = async (configObj) => {

        setLoading(true);
        start();

        const ctrl = new AbortController();
        setController(ctrl);

        const {
            axiosInstance,
            method,
            url,
            requestConfig = []
        } = configObj;


        await  axiosInstance[method.toLowerCase()](url,
            ...requestConfig
        ).then( res => {
            setResponse(res.data);
        }).catch( err => {
            setError(err?.response?.data || "Error Server");
        }).finally (() => {
            setLoading(false);
        })
    }

    useEffect(() => {

        //useEffect cleanup function
        if (controller)
            return () => controller.abort()
    }, [controller])

    return [response, error, (loading || counting), axiosFetch];
}

export default useAxiosFunction;