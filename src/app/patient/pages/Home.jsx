import {Cover} from "../components/Cover.jsx";
import {useEffect, useState} from "react";
import moment from "moment";
import {Card} from "../../share/Card.jsx";
import {Heading} from "../../share/Heading.jsx";


import heart from "../../../assets/heart.jpg"
import temp from "../../../assets/oxygene.png"
import weight from "../../../assets/weight.svg"
import {Calendar} from "../../share/Calendar.jsx";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import axios from "../../../api/Axio.js";
import useAuth from "../../../hooks/useAuth.js";
import DisplayMoment from "../../share/DisplayMoment.jsx";

export const Home = () => {

    const today = moment()
    const [currentDate, setCurrentDate] = useState(today);
    const [onChangeDate, setOnChangeDate] = useState(false);

    const [patient, setPatient] = useState(null);
    const [visits, setVisits] = useState([]);
    const [measure, setMeasure] = useState(null);

    const [response, error, loading, axiosFetch] = useAxiosFunction();
    const [measureResponse, measureError, measureLoading, measureAxiosFetch] = useAxiosFunction();

    const {user, accessToken} = useAuth();


    const img = [
        heart,
        temp,
        weight
    ];


    function setDate (date) {
        setCurrentDate(moment(date, "D/M/YYYY"))
    }

    useEffect(() => {
    }, [currentDate])

    useEffect(() => {

        async function fetchData (){
            await axiosFetch({
                axiosInstance: axios,
                method: 'GET',
                url: 'patients/'+user.login,
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

        fetchData();

        return () => null;
    }, [])

    useEffect(() => {
        async function fetchData (visitId){
            await measureAxiosFetch({
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
            const visit = visits.filter((v) => moment(v.date).format('DD/M/YYYY') === currentDate.format('DD/M/YYYY'))[0];
            if (visit && visit.visitId)
                fetchData(visit.visitId)
            else
                setMeasure(null)
        }

    }, [currentDate, visits])

    useEffect(() => {
        if (response) {
            setPatient({
                fullName : response.user.firstname+' '+response.user.lastname
            })
            console.log(response)
            setVisits(response.visits)
        }
    }, [response])

    useEffect(() => {
        console.log(measureResponse)
        setMeasure(measureResponse)
    }, [measureResponse])

    return(<>

        <div className={"pb-20"}>

            <Cover date={today} data={patient} onChangeDate={setOnChangeDate} />

            <div className="relative -top-6 drop- h-24 bg-white rounded-t-2xl">
                <div className="relative h-24 min-h-full ">

                    <div className={"pt-4"}>

                        <Heading title={
                            <DisplayMoment date={currentDate} />
                        } text={"some text to describe something for you!!!"} width={""} subtitle={""} position={""} />
                    </div>

                    <div className={"p-4"}>

                        {measure ? <>
                            <Card img={weight} title={"Masse"} data={measure.weight} />
                            <Card img={heart} title={"Tension"} data={measure.tension} />
                            <Card img={temp} title={"Température"} data={measure.temperature} />
                        </> : <div className={"text-center"}>
                            Pas de measure prise
                        </div>}


                    </div>

                </div>
            </div>
        </div>

        {onChangeDate && <div className={"absolute top-0 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 flex justify-center pt-20"}>

            <div className={"rounded-xl text-center space-y-4 pt-10"}>

                <Calendar getDate={setDate} dateToColor={visits ? visits.map(({date}) => moment(date).format('DD/M/YYYY')) : []}/>

                <button onClick={() => {
                    setOnChangeDate(false)
                }} className={"bg-green-500 px-4 py-1 text-lg rounded-xl text-white font-semibold mx-auto"}>Confirmer
                </button>
            </div>
        </div>}

    </>)
}