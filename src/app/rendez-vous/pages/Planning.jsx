import {Calendar} from "../../share/Calendar.jsx";

import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {DailyDisplay} from "../../share/DailyDisplay.jsx";
import {useState} from "react";
import moment from "moment";

export const Planning = () => {

    const [date, setDate] = useState(moment().format("DD/MM/YYYY"));
    const [availabilities, setAvailabilities] = useState(null);


    const handleSubmit = () => {}

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

        </div>
    </>)
}