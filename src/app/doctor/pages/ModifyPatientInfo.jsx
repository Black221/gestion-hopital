import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {PatientForm} from "../components/PatientForm.jsx";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import useAuth from "../../../hooks/useAuth.js";
import axios from "../../../api/Axio.js";
import {Spinner} from "../../share/Spinner.jsx";
import moment from "moment/moment.js";


export const ModifyPatientInfo = () => {

    const {id} = useParams();
    const [current, setCurrent] = useState(null);

    const [patient, setPatient] = useState(null);

    const [getResponse = response, getError = error, getLoading = loading, getAxiosFetch = axiosFetch] = useAxiosFunction();
    const [postResponse = response, postError = error, postLoading = loading, postAxiosFetch = axiosFetch] = useAxiosFunction();

    const {accessToken} = useAuth();

    const navigate = useNavigate();

    useEffect(() => {

        async function fetchData () {
            await getAxiosFetch({
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

    }, []);

    useEffect(() => {
        if (getError === '' && getResponse) {
            console.log(moment(getResponse.birthday).format('MM/DD/YYYY'))
            setCurrent({
                patientId: getResponse.user.login,
                firstname: getResponse.user.firstname,
                lastname: getResponse.user.lastname,
                address: getResponse.address,
                sex: getResponse.sex,
                profession: getResponse.profession,
                birthday: moment(getResponse.birthday).format('yyyy-MM-DD'),
                origin: getResponse.origin,
                nationality: getResponse.nationality,
                matrimony: getResponse.matrimony,
                religion: getResponse.religion,
                placeOfBirth: getResponse.placeOfBirth,
                ethnicGroup: getResponse.ethnicGroup,
                diseasesHistory: getResponse.diseasesHistory
            })

            console.log(getResponse)
        }
    }, [getResponse, getError])

    const submitPatient = async (e) => {
        e.preventDefault();
        const data = {
            ...patient,
        }

        await postAxiosFetch({
            axiosInstance: axios,
            method: 'PUT',
            url: 'patients/'+id,
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
        if (postResponse)
            navigate("/home/voir-dossier/"+id)

        if (postError)
            console.log(postError)
    }, [postResponse, postError])


    
    return (<>

        <Breadcrumb link={["medecin", "modifier-dossier", id]} />

        <form onSubmit={submitPatient}>

            {getLoading || !current ? <Spinner /> : <PatientForm data={current} getPatient={setPatient} /> }

            <div className={"text-center mt-10"}>
                <button
                    type="submit"
                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >Valider</button>
            </div>
        </form>



    </>)
}