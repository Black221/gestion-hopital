import {Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import DoctorManager from "./pages/DoctorManager.jsx";
import PatientManager from "./pages/PatientManager.jsx";
import Logs from "./pages/Logs.jsx";
import Activities from "./pages/Activities.jsx";
import Statistics from "./pages/Statistics.jsx";
import Home from "./pages/Home.jsx";


export const Admin = () => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout />}>

                    <Route path={"/"} element={ <Home /> } />
                    <Route path={"/doctor"} element={ <DoctorManager /> } />
                    <Route path={"/patient"} element={ <PatientManager /> } />
                    <Route path={"/logs"} element={ <Logs /> } />
                    <Route path={"/activities"} element={ <Activities /> } />
                    <Route path={"/statistics"} element={ <Statistics /> } />

                </Route>
            </Routes>
        </>
    )
}