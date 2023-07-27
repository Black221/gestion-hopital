import moment from "moment";
import {Calendar} from "../../share/Calendar.jsx";
import {SearchBar} from "../../share/SearchBar.jsx";
import DoctorInfo from "../../share/DoctorInfo.jsx";
import {useEffect, useState} from "react";
import {Textarea} from "../../share/Textarea.jsx";
import useConvertToFrench from "../../../hooks/useConvertToFrench.js";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import axios from "../../../api/Axio.js";
import useAuth from "../../../hooks/useAuth.js";


export const Agenda = () => {




    const today = moment()
    const [currentDate, setCurrentDate] = useState(today);
    const [onChangeDate, setOnChangeDate] = useState(false);
    const [availabilities, setAvailabilities] = useState([]);

    const [convert] = useConvertToFrench();
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [doctor, setDoctor] = useState();

    const [response, error, loading, axiosFetch] = useAxiosFunction();

    const {accessToken} = useAuth();

    function setDate (date) {
        setCurrentDate(moment(date, "D/M/YYYY"))
    }



    useEffect(() => {

        async function fetchData () {
            await axiosFetch({
                axiosInstance: axios,
                method: 'GET',
                url: 'availabilities/date/'+currentDate.format("YYYY-MM-DD"),
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

        if (today <= currentDate)
            fetchData()
        else setAvailabilities([])

        return () => null;
       // setDoctor(DATE.filter(({date}) => date === currentDate.format("D/M/YYYY"))[0])
    }, [currentDate])

    useEffect(() => {
        console.log(response)
        if (response)
            setAvailabilities(response)
    }, [response])

    return(<>

        <div className={""}>
            <div className={"mx-auto w-fit"}>
                <Calendar getDate={setDate} dateToColor={null}/>
            </div>

            <div className={"bg-rd-200 w-full md:px-8 px-2"}>
                <h3 className={"font-semibold"}>Médecins disponibles :</h3>
                <SearchBar label={""} getSearch={() => {}} />
            </div>

            <div className={"md:px-6 px-2"}>
                {availabilities.map((item, index) => <DoctorInfo key={index} data={item}/>)}
            </div>

        </div>

        {onChangeDate && <div className={"absolute top-0 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 flex justify-center pt-20"}>

            <div className={"rounded-xl bg-white p-8 h-fit w-fit mt-20"}>

                <h2 className={"font-bold mb-2"}>Laissez un message</h2>

                <Textarea className={"md:w-96 w-72"} label={"Message"} row={3} />

                <button className={"px-3 py-1 bg-green-400 rounded text-white font-bold mt-2"} onClick={() => setOnChangeDate(false)}>Valider</button>
            </div>

        </div>}
    </>)
}