import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {PatientForm} from "../components/PatientForm.jsx";
import {Measurement} from "../components/Measurment.jsx";
import {useEffect, useState} from "react";
import useAuth from "../../../hooks/useAuth.js";
import {Textarea} from "../../share/Textarea.jsx";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import axios from "../../../api/Axio.js";
import { useNavigate} from "react-router-dom";
import useNotification from "../../../hooks/useNotification.jsx";
import useLoading from "../../../hooks/useLoading.jsx";



export const AddPatient = () => {

    const navigate = useNavigate();

    const [patient, setPatient] = useState(null);
    const [measure, setMeasure] = useState(null);
    const [healthCondition, setHealthCondition] = useState("");


    const [conResponse, showCon, Confirmation] = useNotification();
    const [noResponse, showNo, Notification] = useNotification();
    const [Loader] = useLoading();


    const [response, error, loading, axiosFetch] = useAxiosFunction()
    const [message, setMessage] = useState("");

    const {user, accessToken} = useAuth();

    const submitPatient = async () => {
        const data = {
            ...patient,...measure, healthCondition, doctor : user.login
        }

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

        if (response) {
            setMessage("Patient ajouté avec succès")
            showNo(true)
        }

    }, [response])

    useEffect(() => {
        console.log(noResponse)
    }, [noResponse])

    useEffect(() => {
        if (error) {
            setMessage("Une erreur c'est produit!")
        }
    }, [error])

    useEffect(() => {
        if (noResponse === "Ok" && response.login)
            navigate("/medecin/voir-dossier/"+response.login);

    }, [noResponse])

    useEffect(() => {
        console.log(conResponse)
        if (conResponse === "Confirmer")
            submitPatient()
    }, [conResponse])

    return (<>

        <Breadcrumb link={["medecin", "ajouter-dossier"]} />

        <Confirmation message={{title: "Confirmation", text: "Etes vous sur de vouloir continué"}} actions={["Confirmer", "Annuler"]} />
        <Notification message={{title: "Ajout", text: message}} actions={["Ok"]} />
        <Loader isLoading={loading} />

        <button onClick={() => showNo(true)}>show</button>

        <form onSubmit={(e) => {
            e.preventDefault()
            showCon(true)
        }}>
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

    </>)
}