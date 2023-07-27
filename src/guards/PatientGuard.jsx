import useAuth from "../hooks/useAuth.js";
import {Navigate,  useLocation, Outlet} from "react-router-dom";


const PatientGuard = () => {

    const auth = useAuth();
    const location = useLocation();

    return (auth.user && auth.role === "PATIENT"
            ? <Outlet/>
            : <Navigate to="/login" state={{from: location}} replace={true}/>
    )
}

export default PatientGuard;