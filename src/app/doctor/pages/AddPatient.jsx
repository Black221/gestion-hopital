import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {PatientForm} from "../components/PatientForm.jsx";
import {Measurement} from "../components/Measurment.jsx";
import {useEffect, useState} from "react";
import useAuth from "../../../hooks/useAuth.js";
import {Textarea} from "../../share/Textarea.jsx";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import axios from "../../../api/Axio.js";
import {NavLink} from "react-router-dom";



export const AddPatient = () => {

    const [patient, setPatient] = useState(null);
    const [measure, setMeasure] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [healthCondition, setHealthCondition] = useState("");


    const [response, error, loading, axiosFetch] = useAxiosFunction()

    const {user, accessToken} = useAuth();

    const submitPatient = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            ...patient,...measure, healthCondition, doctor : user.login
        }
        console.log(data)

        await axiosFetch({
            axiosInstance: axios,
            method: 'POST',
            url: 'patients',
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
        console.log(response, loading, error)
        if (loading === false) {
            setIsLoading(loading)
        }
    }, [response, loading, error])

    useEffect(() => {

        if (response) {
            setIsSaved(true)
        }
    }, [response])

    return (<>

        <Breadcrumb link={["medecin", "ajouter-dossier"]} />

        <form onSubmit={submitPatient}>
            <div className={`px-5 pt-5 flex items-center justify-around flex-wrap`}>

                <PatientForm data={null} getPatient={setPatient} />

                <Measurement getMeasure={setMeasure} />
            </div>

            <div className={"p-5"}>
                <Textarea label={"Etat général"} value={healthCondition} setValue={setHealthCondition} row={4} />
            </div>

            <div>
                <button
                    type="submit"
                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    Récupérer
                </button>
            </div>
        </form>

        {isLoading && <div className={`absolute left-0 top-0 right-0 bottom-0 bg-gray-600 bg-opacity-20 flex items-center justify-center`}>

            {isSaved ? (
                <NavLink className={"text-xl text-blue-500 p-6 bg-white rounded-lg"} to={"/medecin/voir-dossier/"}>Voir profil</NavLink>
            ) : <svg aria-hidden="true" role="status"
                     className="inline w-1O h-10 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"/>
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#6EAF50"/>
            </svg> }

        </div>}
    </>)
}