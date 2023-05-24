import {Breadcrumb} from "../Share/Breadcrumb.jsx";
import {PatientForm} from "./PatientForm.jsx";
import {FloatingButton} from "../Share/FloatingButton.jsx";


export const ModifyPatientInfo = () => {

    return (<>

        <Breadcrumb link={["medecin", "modifier-dossier", "2"]} />

        <PatientForm />

        <FloatingButton title={"Sauvegarder"} />

    </>)
}