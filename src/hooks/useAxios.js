import {useEffect, useState} from "react";


const useAxios = (configObj) => {
    
    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj;
    
    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);

    const reFetch = () => setReload(prevState => prevState + 1);

    
    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                const res = await  axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                    signal: controller.signal
                });
                setResponse(res.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        //useEffect cleanup function
        return () => controller.abort()

        // eslint-disable-next-line
    }, [reload])
    
    return [response, error, loading, reFetch];
}


export default useAxios;