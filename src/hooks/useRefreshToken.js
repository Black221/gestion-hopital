import useAuth from "./useAuth.js";
import axios from "../api/axiosPrivate.js";

const useRefreshToken = () => {

    const auth  = useAuth();

    return async () => {

        await axios.post('auth/refresh-token', {},{
            headers: {  Authorization: `Bearer ${auth?.accessToken}` },
            withCredentials: true
        }).then((res) => {
            auth.refresh(res.data.accessToken)
        });
    };
}

export default useRefreshToken;