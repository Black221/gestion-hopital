import {Breadcrumb} from "../Share/Breadcrumb.jsx";
import {useParams} from "react-router-dom";
import {PatientInfo} from "../Share/PatientInfo.jsx";
import {DiagnosticForm} from "../Share/DiagnosForm.jsx";
import {LastVisit} from "../Share/LastVisit.jsx";
import {Calendar} from "../Share/Calendar.jsx";
import {useEffect, useState} from "react";
import {PATIENT} from "../../dummy.js";


export const PatientHistory = () => {

    const {id} = useParams();
    const [date, setDate] = useState(null);

    const [patient, setPatient] = useState(null);

    useEffect(() => {
        console.log(id)
        if (id)
            setPatient(PATIENT[parseInt(id)-1]);
    }, [id])

    const getChoice = (choice) => {
        setDate(choice)
    }

    return (<>
        <Breadcrumb link={["medecin", "lister-dossier", "voir-dossier", id]} />

        <div className={" space-x-10 items-start"}>

            <div className={"flex justify-around items-center flex-wrap mb-10"}>

                <PatientInfo data={patient} />

                <div>
                    <h2 className={"font-bold text-xl text-center"}>Dernières visites</h2>
                    <Calendar getDate={getChoice} />
                </div>

            </div>

            <DiagnosticForm data={patient.mesures} />

        </div>

       <div className={"text-end pb-8"}>
           <button
               onClick={() => {
               }}
               type="submit"
               className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
           >
               Sauvegarder
           </button>
       </div>

    </>)
}