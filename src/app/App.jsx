// External importation
import {Routes, Route} from 'react-router-dom';

//Internal importation
import {Home} from "./home/Home.jsx";
import {Doctor} from "./doctor/Doctor.jsx";
import {Patient} from "./patient/Patient.jsx";
import {Admin} from "./admin/Admin.jsx";
import {useEffect} from "react";
import {NotFound} from "./notFound/NotFound.jsx";
import {Login} from "./auth/pages/Login.jsx";
import {Register} from "./auth/pages/Register.jsx";
import useAppState from "../hooks/useAppState.js";
import Layout from "./Layout.jsx";
import RequiredAuth from "../guards/RequiredAuth.jsx";
import useAuth from "../hooks/useAuth.js";
import DoctorGuard from "../guards/DoctorGuard.jsx";
import PatientGuard from "../guards/PatientGuard.jsx";
import AdminGuard from "../guards/AdminGuard.jsx";
import Redirection from "./auth/pages/Redirection.jsx";

{/*
function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
*/}

export const App = () =>  {

    const {
        setScreenSize,
    } = useAppState();

    const auth = useAuth();


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth ? window.innerWidth : 0);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [setScreenSize]);


    return (<>
        <Routes>
            <Route path="/" element={ <Layout /> }>

                {/*} <ScrollToTop /> */}

                {/* Public routes */}
                <Route path={`/`} exact element={ <Home /> } />
                <Route path={`/login`} exact element={ <Login /> } />
                <Route path={`/register`} exact element={ <Register /> } />
                <Route path={`/redirection`} exact element={ <Redirection /> } />

                {/*
                 Private routes
                <Route element={ <RequiredAuth/> }>
                    <Route path={`/home/*`} exact element={<>{
                        auth.role === "DOCTOR"
                            ? <Doctor />
                            : auth.role === "PATIENT"
                                ? <Patient />
                                : auth.role === "ADMIN"
                                    ? <Admin />
                                    : <NotFound />
                    }</>} />
                </Route>
                 */}

                <Route element={<DoctorGuard />}>
                    <Route path={`/medecin/*`} exact element={ <Doctor/> } />
                </Route>

                <Route element={<PatientGuard />}>

                    <Route path={`/patient/*`} exact element={ <Patient /> } />
                </Route>


                {/* Admin routes */}
                <Route path={`/office/*`} exact element={ <Admin /> } />

                {/*Not Found page*/}
                <Route path={`*`} element={ <NotFound /> } />

            </Route>
        </Routes>
    </>)
}

