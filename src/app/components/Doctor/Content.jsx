import {Route, Routes} from "react-router-dom";
import {AddPatient} from "./AddPatient.jsx";
import {PatientList} from "./PatientList.jsx";
import {ModifyPatient} from "./ModifyPatient.jsx";
import {Statistic} from "./Statistic.jsx";
import {Notification} from "./Notification.jsx";
import {History} from "./History.jsx";
import {Profile} from "./Profile.jsx";
import {Breadcrumb} from "../Share/Breadcrumb.jsx";
import {PatientHistory} from "./PatientHistory.jsx";
import {Agenda} from "./Agenda.jsx";
import {ModifyPatientInfo} from "./ModifyPatientInfo.jsx";


function DoctorHome() {

    return (<>
        <Breadcrumb />
    </>);
}

export const Content = () => {


    return (<>

        <div className={"p-8 overflow-y-auto max-h-[calc(100vh-5rem)]"}>

            <Routes>

                {/**/}
                <Route path={"/agenda"} element={ <Agenda />} />

                {/**/}
                <Route path={"/ajouter-dossier"} element={ <AddPatient />} />

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