import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {NavLink, useParams} from "react-router-dom";
import {PatientInfo} from "../../share/PatientInfo.jsx";
import {DiagnosticForm} from "../../share/DiagnosForm.jsx";
import {Calendar} from "../../share/Calendar.jsx";
import {useState} from "react";
import moment from "moment";
import useLoading from "../../../hooks/useLoading.jsx";
import DiseasesHistory from "../../share/DiseasesHistory.jsx";


export const PatientHistory = () => {

    const {id} = useParams();
    const [date, setDate] = useState(moment().format('D/M/YYYY'));

    const [patient, setPatient] = useState(null);
    const [measure, setMeasure] = useState(null);
    const [visits, setVisits] = useState(null);

    const today = moment().format('D/M/YYYY');


    const getChoice = (choice) => {
        setDate(choice)
    }


    return (<>
        <Breadcrumb link={["medecin", "lister-dossier", "voir-dossier", id]} />

        <div className={" space-x-10 items-start"}>

            <div className={"flex justify-around items-center flex-wrap-reverse mb-10 "}>

                <PatientInfo data={patient} />

                <div className={""}>
                    <h2 className={"font-bold text-xl text-center"}>Dernières visites</h2>
                    {<Calendar getDate={getChoice} dateToColor={
                            visits ? visits.map(({date}) => moment(date).format('DD/M/YYYY')) : []}/>
                    }

                </div>

            </div>

            <DiseasesHistory getValue={() => {}} data={patient && patient?.diseasesHistory ? JSON.parse(patient?.diseasesHistory) : null} />

            <h2 className={"font-bold text-xl my-2"}>{date}</h2>
            {measure ? <DiagnosticForm data={measure}/> : <div className={"text"}>

                Pas de prise en charge.
            </div>}

        </div>

        {(measure === null || !measure) && date === today && <div className={"py-10 text-center"}>

            <NavLink to={"/medecin/consultation/"+id} className={"py-2 px-4 bg-green-500 rounded text-white font-bold"}>Faire consultation</NavLink>

        </div>}

    </>)
}