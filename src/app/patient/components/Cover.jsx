import {useEffect, useState} from "react";
import useConvertToFrench from "../../../hooks/useConvertToFrench.js";


export const Cover = ({date, data, onChangeDate}) => {

    const [fullName, setFullName] = useState("");
    const status = [

    ]

    const [convert] = useConvertToFrench();

    useEffect(() => {
        if (data && data.fullName)
            setFullName(data.fullName)
    }, [data])

    return (<>

        <div className={"h-72 w-full bg--400 flex flex-col space-y-4 items-center justify-center bg-gray-100"}>


            <div className={"w-full px-4 space-y-4"}>
                <h6 className={"text-end text-blue-400 font-semibold"}>{date.format("D")} {convert(date.format("MMMM"))} {date.format("YYYY")}</h6>
                <h2 className={"text-center text-xl font-bold"}>{fullName ? fullName : "Prenom Nom"}</h2>
                <p className={"text-center text-md text-gray-500"}>Fréquence rendez vous: <span className={"text-blue-500"}>bonne</span></p>
            </div>

            <button onClick={() => onChangeDate(true)} className={"py-2 px-3 bg-green-500 rounded-xl text-white font-semibold"}>Voir les visites</button>

            <div className={"text-end w-full md:px-8 px-4 text-sm text-gray-600 "}>
                Dernier rendez-vous : <span className={"text-blue-500"}>hier</span>
            </div>
        </div>
    </>)
}