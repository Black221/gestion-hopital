import useAuth from "../hooks/useAuth.js";
import {Navigate,  useLocation, Outlet} from "react-router-dom";


const RequiredAuth = () => {

    const auth = useAuth();
    const location = useLocation();

    return (auth.user
        ? <Outlet/>
        : <Navigate to="/login" state={{from: location}} replace={true}/>
    )
}

export default RequiredAuth;