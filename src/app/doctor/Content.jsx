import {Route, Routes} from "react-router-dom";
import {AddPatient} from "./pages/AddPatient.jsx";
import {PatientList} from "./pages/PatientList.jsx";
import {ModifyPatient} from "./pages/ModifyPatient.jsx";
import {Statistic} from "./pages/Statistic.jsx";
import {Notification} from "./pages/Notification.jsx";
import {History} from "./components/History.jsx";
import {Profile} from "./components/Profile.jsx";
import {Breadcrumb} from "../share/Breadcrumb.jsx";
import {PatientHistory} from "./pages/PatientHistory.jsx";
import {Agenda} from "./pages/Agenda.jsx";
import {ModifyPatientInfo} from "./pages/ModifyPatientInfo.jsx";
import Index from "./pages/Index.jsx";
import Consultation from "./pages/Consultation.jsx";


function DoctorHome() {

    return (<>
        <Breadcrumb />
    </>);
}

export const Content = () => {


    return (<>

        <div className={"p-8 overflow-y-auto max-h-[calc(100vh-5rem)]"}>

            <Routes>

                <Route path={"/"} exact element={ <AddPatient /> } />
                {/**/}
                <Route path={"/agenda"} element={ <Agenda />} />

                {/**/}
                <Route path={"/ajouter-dossier"} element={ <AddPatient /> } />

                {/**/}
                <Route path={"/consultation/:id"} element={ <Consultation />} />

                {/**/}
                <Route path={"/lister-dossier"} element={ <PatientList />} />

                {/**/}
                <Route path={"/voir-dossier/:id"} element={ <PatientHistory />} />

                {/**/}
                <Route path={"/modifier-dossier"} element={ <ModifyPatient/> } />

                {/**/}
                <Route path={"/modifier-dossier/:id"} element={ <ModifyPatientInfo/> } />

                {/**/}
                <Route path={"/statistiques"} element={ <Statistic/> } />

                {/**/}
                <Route path={"/notifications"} element={ <Notification /> } />

                {/**/}
                <Route path={"/historiques"} element={ <History /> } />

                {/**/}
                <Route path={"/profile"} element={ <Profile /> } />
            </Routes>

        </div>
    </>)
}