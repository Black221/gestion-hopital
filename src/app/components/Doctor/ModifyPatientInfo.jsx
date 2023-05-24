import {Breadcrumb} from "../Share/Breadcrumb.jsx";
import {PatientForm} from "./PatientForm.jsx";
import {FloatingButton} from "../Share/FloatingButton.jsx";
import {useAppStateContext} from "../../context/AppContext.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


export const ModifyPatientInfo = () => {

    const {id} = useParams();
    const {patients} = useAppStateContext();
    const [current, setCurrent] = useState(null);
    
    const getSaved = () => {

    }

    const getValidate = () => {
        
    }

    useEffect(() => {
        if (patients && id)
            setCurrent(patients.filter((p) => (id ===p.id))[0])

    },[id, patients])
    
    return (<>

        <Breadcrumb link={["medecin", "modifier-dossier", id]} />

        <PatientForm data={current} isSaved={getSaved} validate={getValidate} save={false} />

        <FloatingButton title={"Sauvegarder"} />

    </>)
}