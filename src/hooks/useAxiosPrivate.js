import {useEffect} from "react";
import axiosPrivate from "../api/axiosPrivate.js";
import useAuth from "./useAuth.js";
import useRefreshToken from "./useRefreshToken.js";


const useAxiosPrivate = () => {

    const auth = useAuth();
    const refresh = useRefreshToken();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
                }
                return config;
            }, error => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.send) {
                    prevRequest.send = true;
                    const response = await refresh();
                    prevRequest.header['Authorization'] = `Bearer ${response.data.accessToken}`;
                    return axiosPrivate(prevRequest);
                }
            }
        )

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
            axiosPrivate.interceptors.response.eject(responseIntercept)
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;