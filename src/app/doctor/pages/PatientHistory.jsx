import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {NavLink, useParams} from "react-router-dom";
import {PatientInfo} from "../../share/PatientInfo.jsx";
import {DiagnosticForm} from "../../share/DiagnosForm.jsx";
import {Calendar} from "../../share/Calendar.jsx";
import {useEffect, useState} from "react";
import moment from "moment";
import {Heading} from "../../share/Heading.jsx";
import axios from "../../../api/Axio.js";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import useAuth from "../../../hooks/useAuth.js";
import useLoading from "../../../hooks/useLoading.jsx";


export const PatientHistory = () => {

    const {id} = useParams();
    const [date, setDate] = useState(moment().format('D/M/YYYY'));

    const [patient, setPatient] = useState(null);
    const [measure, setMeasure] = useState(null);
    const [response, error, loading, axiosFetch] = useAxiosFunction();
    const [visitResponse = response, visitError = error, visitLoading = loading, visitAxios = axiosFetch] = useAxiosFunction();
    const [visits, setVisits] = useState(null);

    const [Loader] = useLoading();

    const {accessToken} = useAuth();

    const today = moment().format('D/M/YYYY');


    const getChoice = (choice) => {
        setDate(choice)
    }


    useEffect( () => {
        async function fetchData () {
            await axiosFetch({
                axiosInstance: axios,
                method: 'GET',
                url: 'patients/'+id,
                requestConfig: [
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': '*/*',
                            'withCredentials': 'true',
                            'Authorization': 'Bearer ' + accessToken
                        }
                    }
                ]
            })
        }


        fetchData()

        return () => null;

    }, [])

    useEffect(() => {
        if (error === '' && response) {
            setPatient({
                patientId: response.user.login,
                firstname: response.user.firstname,
                lastname: response.user.lastname,
                address: response.address,
                sex: response.sex,
                profession: response.profession,
                birthday: response.birthday,
                origin: response.origin,
                nationality: response.nationality,
                matrimony: response.matrimony,
                religion: response.religion,
                placeOfBirth: response.placeOfBirth,
                ethnicGroup: response.ethnicGroup,
                diseaseHistory: response.diseaseHistory
            })

            setVisits(response.visits);
            console.log(response)
        }
    }, [response, error])

    useEffect(() => {

        async function fetchData (visitId) {


            await visitAxios({
                axiosInstance: axios,
                method: 'GET',
                url: 'measures/visit/'+visitId,
                requestConfig: [
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': '*/*',
                            'withCredentials': 'true',
                            'Authorization': 'Bearer ' + accessToken
                        }
                    }
                ]
            })
        }

        if (visits != null) {
            const visit = visits.filter((v) => moment(v.date).format('DD/M/YYYY') === date)[0];
            if (visit && visit.visitId)
                fetchData(visit.visitId)
            else
                setMeasure(null)
        }

        return () => null;

    }, [date, visits])

    useEffect(() => {

        setMeasure(visitResponse)
    }, [visitResponse, visitError])

    return (<>
        <Breadcrumb link={["medecin", "lister-dossier", "voir-dossier", id]} />

        <div className={" space-x-10 items-start"}>

            <Loader isLoading={loading || visitLoading} />

            <div className={"flex justify-around items-center flex-wrap-reverse mb-10 "}>

                <PatientInfo data={patient} />

                <div className={""}>
                    <h2 className={"font-bold text-xl text-center"}>Dernières visites</h2>
                    {<Calendar getDate={getChoice} dateToColor={
                            visits ? visits.map(({date}) => moment(date).format('DD/M/YYYY')) : []}/>
                    }

                </div>

            </div>

            {patient && patient.diseasesHistory && <Heading title={"Antécédents"} text={patient.diseasesHistory}/>}

            <h2 className={"font-bold text-xl mb-2"}>{date}</h2>
            {measure ? <DiagnosticForm data={measure}/> : <div className={"text"}>

                Pas de prise en charge.
            </div>}

        </div>

        {(measure === null || !measure) && date === today && <div className={"py-10 text-center"}>


            <NavLink to={"/medecin/consultation/"+id} className={"py-2 px-4 bg-green-500 rounded text-white font-bold"}>Faire consultation</NavLink>

        </div>}

    </>)
}