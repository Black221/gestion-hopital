import {useContext} from "react";
import {AuthStateContext} from "../context/AuthContext.jsx";


const useAuth = () => {
    return useContext(AuthStateContext);
}

export default useAuth;