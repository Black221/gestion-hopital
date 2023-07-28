import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {useEffect, useState} from "react";
import {Pagination} from "../../share/Pagination.jsx";
import {Table} from "../../share/Table.jsx";
import {SearchBar} from "../../share/SearchBar.jsx";
import axios from "../../../api/Axio.js";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import useAuth from "../../../hooks/useAuth.js";
import moment from "moment";
import useLoading from "../../../hooks/useLoading.jsx";


export const PatientList = () => {


    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [dataToRender, setDataToRender] = useState([]);

    const [Loader] = useLoading();

    const [response, error, loading, axiosFetch] = useAxiosFunction()
    const {user, accessToken} = useAuth();

    

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
        if (search !== "")
            setDataToRender(data.filter(({firstname, lastname, nationality, age, sex, patientId}) => (
                firstname.toLowerCase().search(search) >= 0
                || lastname.toLowerCase().search(search) >= 0
                || nationality.toLowerCase().search(search) >= 0
                || age.toString().toLowerCase().search(search) >= 0
                || sex.toLowerCase().search(search) >= 0
                || patientId.toLowerCase().search(search) >= 0
            )));
        else
            setDataToRender(data);

    }, [search, data])



    return (<>
        <Breadcrumb link={["medecin", "lister-patient"]} />

        <SearchBar getSearch={setSearch} />

        <div className={"space-y-20"}>
            <div className={"flex-1"}>
                <Table column={["patientId", "firstname", "lastname", "age", "sex", "address", "nationality"]}
                        action={{ref: ["modifier-dossier", "voir-dossier"], position: "medecin", id: "patientId"}}
                        data={dataToRender}/>
            </div>

            <Pagination page={0} length={data.length} dataCount={data.length} />
        </div>

        <Loader isLoading={loading} />

    </>)
}