import {Calendar} from "../../share/Calendar.jsx";

import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {Event} from "../../share/Event.jsx";
import {DailyDisplay} from "../../share/DailyDisplay.jsx";
import {useEffect, useState} from "react";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";
import axios from "../../../api/Axio.js";
import useAuth from "../../../hooks/useAuth.js";
import moment from "moment";

export const Agenda = () => {

    const [date, setDate] = useState(moment().format("DD/MM/YYYY"));
    const [availabilities, setAvailabilities] = useState(null);

    const [getResponse , getError , getLoading , getAxiosFetch ] = useAxiosFunction();
    const [postResponse, postError , postLoading , postAxiosFetch ] = useAxiosFunction();

    const {user, accessToken } = useAuth();

    const handleSubmit = async () => {

        await postAxiosFetch({
            axiosInstance: axios,
            method: 'PUT',
            url: 'availabilities/'+user.login,
            requestConfig: [
                JSON.stringify({date, hours: availabilities.toString()}),
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

    useEffect(() => {

        let rDate = date.split('/');
        rDate = rDate.join('-')
        async function fetchData () {
            await getAxiosFetch({
                axiosInstance: axios,
                method: 'GET',
                url: 'availabilities/'+user.login +'/'+ rDate,
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

    }, [date]);

    useEffect(() => {
        if (getLoading === false) {
            let av = []
            if (getResponse) {
                console.log(getResponse)
                av = getResponse.hours.split(",")
            }
            if (availabilities !== av) {

                setAvailabilities(av.map(Number))
            }
        }

        if (getError) {
            console.log(getError)
        }

    }, [getResponse, date, getLoading])


    useEffect(() => {
        if (postResponse)
            console.log(postResponse)

        if (postError)
            console.log(postError)

        console.log("hey")
    }, [postResponse, postError])

    useEffect(() => {
        if (postLoading)
            console.log("hey")
    }, [postLoading])

    return (<>

        <Breadcrumb link={["medecin", "agenda"]} />

        <div className={"py-4"}>

            <div >
                <div className={`flex items-center justify-between rounded-t-xl border p-5 bg-gray-50 bg-opacity-50`}>
                    <div className={""}>
                        <h2 className={`font-bold`}>{date}</h2>
                        {/* <p className={"text-sm"}>{moment(date).format("dddd").toString()}</p> */}
                    </div>
                    <div className={`flex items-center space-x-4`}>
                        <div className={"h-8 border-l-2"}></div>
                        <div className={``}>
                            <button
                                onClick={() => {
                                    let n = date.split("/")
                                    let d = moment(`${n[1]}/${n[0]}/${n[2]}`)
                                    if (d > moment())
                                        handleSubmit()
                                }}
                                className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Sauvegarder </button>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-wrap-reverse  mb-10 border-b border-r`}>
                    <div className={`flex-1`}>
                        <DailyDisplay data={availabilities} getAvailabilities={setAvailabilities} />
                    </div>
                    <Calendar dateToColor={[]} getDate={setDate} />
                </div>

            </div>


            {/*<Event/>*/}
        </div>

    </>)
}