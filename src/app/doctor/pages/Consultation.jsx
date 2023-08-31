import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {Textarea} from "../../share/Textarea.jsx";
import {useEffect, useState} from "react";
import {Measurement} from "../components/Measurment.jsx";
import axios from "../../../api/Axio.js";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import useAuth from "../../../hooks/useAuth.js";
import moment from "moment";
import useNotification from "../../../hooks/useNotification.jsx";
import useLoading from "../../../hooks/useLoading.jsx";
import DiseasesHistory from "../../share/DiseasesHistory.jsx";


const Consultation = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [diseasesHistory, setDiseasesHistory] = useState(null);
    const [healthCondition, setHealthCondition] = useState(null);
    const [measure, setMeasure] = useState(null);

    const [response, error, loading, axiosFetch] = useAxiosFunction();
    const [message, setMessage] = useState("");

    const [noResponse, showNo, Notification] = useNotification();
    const [conResponse, showCon, Confirmation] = useNotification();
    const [Loader] = useLoading();

    const {user, accessToken} = useAuth();
    const today = moment().format('YYYY-MM-DD');


    const submitPatient = async () => {
        const data = {
            ...measure, healthCondition, doctorId : user.login, patientId: id,
            date : today, hours : moment().format('HH:mm'), diseasesHistory
        }

        await axiosFetch({
            axiosInstance: axios,
            method: 'POST',
            url: 'visits',
            requestConfig: [
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '*/*',
                        'withCredentials': 'true',
                        'Authorization' : 'Bearer '+accessToken
                    }
                }
            ]
        })
    }

    useEffect(() => {
        console.log(response, error)
    }, [response, error])

    useEffect(() => {

        if (response) {
            setMessage("Consultation effectué")
            showNo(true)
        }

    }, [response])

    useEffect(() => {
        if (noResponse === "Ok" && response.message === "visit added")
            navigate("/medecin/voir-dossier/"+id);

    }, [noResponse])

    useEffect(() => {
        if (conResponse === "Confirmer")
            submitPatient()
    }, [conResponse])


    return (<>

        <Breadcrumb link={["medecin", "consultation", id]} />

        <Confirmation message={{title: "Confirmation", text: "Etes vous sur de vouloir continué"}} actions={["Confirmer", "Annuler"]} />
        <Notification message={{title: "Ajout", text: message}} actions={["Ok"]} />
        <Loader isLoading={loading} />

        <form onSubmit={(e) => {
            e.preventDefault()
            showCon(true)
        }} className={"items-start"}>

            <div className={"flex justify-around flex-wrap"}>

                <div className={"lg:w-7/12 w-full"}>
                    {/*
                    <Textarea label={"Antécédants"} className={"mt-10"} row={8} value={diseasesHistory} setValue={setDiseasesHistory} />
                    */}
                    <DiseasesHistory data={null} getValue={setDiseasesHistory} disabled={false} />
                    <Textarea label={"Etat général"} className={"mt-10"} row={6} value={healthCondition} setValue={setHealthCondition} />

                </div>

                <div className={"mt-10 w-fit"}>
                    <Measurement getMeasure={setMeasure} />
                </div>
            </div>


            <div className={"mt-10 text-center"}>
                <button
                    type="submit"
                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    Valider
                </button>
            </div>
        </form>

    </>)
}

export default Consultation;