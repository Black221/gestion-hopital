import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {Table} from "../../share/Table.jsx";
import {useEffect, useState} from "react";
import axios from "../../../api/Axio.js";
import moment from "moment/moment.js";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import useAuth from "../../../hooks/useAuth.js";
import useLoading from "../../../hooks/useLoading.jsx";
import {useCountdownSeconds} from "../../../hooks/useCountdown.js";
import useDebounce from "../../../hooks/useDebounce.js";


export const ModifyPatient = () => {

    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search);
    const [data, setData] = useState([]);
    const [dataToRender, setDataToRender] = useState([]);

    const [response, error, loading, axiosFetch] = useAxiosFunction()
    const {user, accessToken} = useAuth();

    const [Loader] = useLoading();


    useEffect( () => {

        async function fetchData () {
            await axiosFetch({
                axiosInstance: axios,
                method: 'GET',
                url: 'patients/byDoctor/'+user.login,
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
            let newArray = response.map((item) => ({
                patientId: item.user.login,
                firstname: item.user.firstname,
                lastname: item.user.lastname,
                address: item.address,
                sex: item.sex,
                age: getAge(item.birthday),
                nationality:  item.nationality
            }))
            setData(newArray)
        }
    }, [response, error])

    const getAge = (birthday) => {
        const today = moment().format('YYYY');

        return today - moment(birthday).format('YYYY')
    }


    useEffect(() => {
        if (debouncedSearch !== "")
            setDataToRender(data.filter(({firstname, lastname, nationality, age, sex, patientId}) => (
                firstname.toLowerCase().search(debouncedSearch) >= 0
                || lastname.toLowerCase().search(debouncedSearch) >= 0
                || nationality.toLowerCase().search(debouncedSearch) >= 0
                || age.toString().toLowerCase().search(debouncedSearch) >= 0
                || sex.toLowerCase().search(debouncedSearch) >= 0
                || patientId.toLowerCase().search(debouncedSearch) >= 0

            )));
        else
            setDataToRender(data);

    }, [debouncedSearch, data])


    return (<>

        <Breadcrumb link={["medecin", "modifier-dossier"]} />

        <Loader isLoading={loading} />

        <div className={"flex flex-col items-center justify-center space-y-10 mt-20"}>

            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" id="table-search-users"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                       placeholder="Chercher..."/>
            </div>

            <div className={"w-10/12"}>
                <Table column={["patientId", "firstname", "lastname", "age", "sex", "address", "nationality"]} data={dataToRender} action={{ref: ["modifier-dossier"], position: ""}} />

            </div>

        </div>

    </>)
}