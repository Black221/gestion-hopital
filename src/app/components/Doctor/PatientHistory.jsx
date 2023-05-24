import {Breadcrumb} from "../Share/Breadcrumb.jsx";
import {useParams} from "react-router-dom";
import {PatientInfo} from "../Share/PatientInfo.jsx";
import {DiagnosticForm} from "../Share/DiagnosForm.jsx";
import {Calendar} from "../Share/Calendar.jsx";
import {useEffect, useState} from "react";
import {FloatingButton} from "../Share/FloatingButton.jsx";
import moment from "moment";
import {Heading} from "../Share/Heading.jsx";
import {useAppStateContext} from "../../context/AppContext.jsx";


export const PatientHistory = () => {

    const {id} = useParams();
    const [date, setDate] = useState(moment().format('D/M/YYYY'));

    const [patient, setPatient] = useState(null);
    const [mesure, setMesure] = useState(null);

    const {patients} = useAppStateContext();

    const today = moment().format('D/M/YYYY');

    useEffect(() => {
        console.log(patients[parseInt(id)-1])
        if (id)
            setPatient(patients[parseInt(id)-1]);
    }, [id])

    const getChoice = (choice) => {
        setDate(choice)
    }

    const getMesure = () => {
        let i = 0;
        while (i < patient.mesures.length && patient.mesures[i].date !== date) i++;

        if (i < patient.mesures.length  && patient.mesures[i].date === date)
            return patient.mesures[i];
        else
            return null;
    }

    useEffect(() => {
        if (patient && patient.mesures[0] && patient.mesures[0].date && date) {
            setMesure(getMesure());
            console.log(getMesure())
        }
    }, [patient, date])

    return (<>
        <Breadcrumb link={["medecin", "lister-dossier", "voir-dossier", id]} />

        <div className={" space-x-10 items-start"}>

            <div className={"flex justify-around items-center flex-wrap mb-10"}>

                <PatientInfo data={patient} />

                <div>
                    <h2 className={"font-bold text-xl text-center"}>Dernières visites</h2>
                    <Calendar getDate={getChoice} dateToColor={patient && patient.mesures ? patient.mesures.map(({date}) => date) : []}/>
                </div>

            </div>

            {patient && patient.antecedents && <Heading title={"Antécédents"} text={patient.antecedents}/>}

            {mesure ? <DiagnosticForm data={mesure}/> : <div className={"text-center"}>
                Pas de mesure prise.
            </div>}

        </div>

        {(mesure === null || !mesure) && date === today && <FloatingButton title={"+"} onClick={() => {
        }} rounded={true} position={"top"} color={"bg-blue-600"}/>}

    </>)
}