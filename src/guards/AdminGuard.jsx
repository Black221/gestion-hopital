import useAuth from "../hooks/useAuth.js";
import {Navigate,  useLocation, Outlet} from "react-router-dom";


const AdminGuard = () => {

    const auth = useAuth();
    const location = useLocation();

    return (auth.user && auth.role === "DOCTOR"
            ? <Outlet/>
            : <Navigate to="/login" state={{from: location}} replace={true}/>
    )
}

export default AdminGuard;