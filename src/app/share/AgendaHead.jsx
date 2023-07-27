import {useEffect, useState} from "react";
import moment from "moment";


export const AgendaHead = ({date}) => {

    const [currentDate, setCurrentDate] = useState(moment().format("DD/MM/YYYY").toString());

    useEffect(() => {
        if (date)
            setCurrentDate(date);
    }, [date])


    return (<>
        <div className={`flex items-center justify-between rounded-t-xl border p-5 bg-gray-50 bg-opacity-50`}>
            <div className={""}>
                <h2 className={`font-bold`}>{currentDate}</h2>
                {/* <p className={"text-sm"}>{moment(date).format("dddd").toString()}</p> */}
            </div>
            <div className={`flex items-center space-x-4`}>
                {/*<div className={"space-x-2 border rounded-lg bg-white"}>
                    <button className={"p-2.5 hover:bg-gray-100"}>
                        <img className={"w-3"} src={left} alt=""/>
                    </button>
                    <span>Aujourd'hui</span>
                    <button className={"p-2.5 hover:bg-gray-100"}>

                        <img className={"w-3"} src={right} alt=""/>
                    </button>
                </div>
                <div className={"space-x-2 border rounded-lg  bg-white"}>
                    <button className={"p-2.5 hover:bg-gray-100"}>

                        <img className={"w-3"} src={left} alt=""/>
                    </button>
                    <span>Jour</span>
                    <button className={"p-2.5 hover:bg-gray-100"}>

                        <img className={"w-3"} src={right} alt=""/>
                    </button>
                </div>*/}
                <div className={"h-8 border-l-2"}></div>
                <div className={``}>
                    <button
                        type={"submit"}
                        className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Sauvegarder </button>
                </div>
            </div>
        </div>
    </>)
}