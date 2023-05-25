import {Route, Routes} from "react-router-dom";
import {Home} from "./Home.jsx";
import {Notifications} from "./Notifications.jsx";
import {Agenda} from "./Agenda.jsx";
import {DoctorProfile} from "./DoctorProfile.jsx";


export const Content = () => {

    return (<>

        <Routes>
            {/*Home page*/}
            <Route path={"/"} element={<Home />} />

            {/*  page*/}
            <Route path={"/rendez-vous"} element={<Agenda />} />

            {/*  page*/}
            <Route path={"/rendez-vous/*"} element={<DoctorProfile />} />

            {/*  page*/}
            <Route path={"/notifications"} element={<Notifications />} />

        </Routes>
    </>)
}