import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {useParams} from "react-router-dom";
import {Textarea} from "../../share/Textarea.jsx";
import {useEffect, useState} from "react";
import {Measurement} from "../components/Measurment.jsx";
import axios from "../../../api/Axio.js";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import useAuth from "../../../hooks/useAuth.js";
import moment from "moment";


const Consultation = () => {

    const {id} = useParams();

    const [diseasesHistory, setDiseasesHistory] = useState(null);
    const [healthCondition, setHealthCondition] = useState(null);
    const [measure, setMeasure] = useState(null);

    const [response, error, loading, axiosFetch] = useAxiosFunction()
    const [isLoading, setIsLoading] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const {user, accessToken} = useAuth();
    const today = moment().format('YYYY-MM-DD');


    const submitPatient = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            ...measure, healthCondition, doctorId : user.login, patientId: id,
            date : today, hours : moment().format('HH:mm')
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

    return (<>

        <Breadcrumb link={["medecin", "consultation", id]} />

        <form onSubmit={submitPatient} className={"items-start"}>

            <div className={"flex justify-around flex-wrap"}>

                <div className={"lg:w-7/12 w-full"}>
                    <Textarea label={"Antécédants"} className={"mt-10"} row={8} value={diseasesHistory} setValue={setDiseasesHistory} />
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