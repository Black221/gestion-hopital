import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Notifications} from "./pages/Notifications.jsx";
import {Agenda} from "./pages/Agenda.jsx";
import {DoctorProfile} from "./components/DoctorProfile.jsx";


export const Content = () => {

    return (<>

        <div className={"pb-20"}>
            <Routes>
                {/*Home page*/}
                <Route path={"/"} exact element={<Home />} />

                {/*  page*/}
                <Route path={"/rendez-vous"} exact element={<Agenda />} />

                {/*  page*/}
                <Route path={"/rendez-vous/:id"} exact element={<DoctorProfile />} />

                {/*  page*/}
                <Route path={"/notifications"} exact element={<Notifications />} />

            </Routes>
        </div>
    </>)
}