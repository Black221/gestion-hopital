import {Calendar} from "../../share/Calendar.jsx";
import {Heading} from "../../share/Heading.jsx";


export const DoctorProfile = ({data}) => {

    return (<>

        <div className={"p-4"}>
            <div className={"p-8 relative"}>

                <div className={"w-20 h-20 bg-red-300 rounded-full absolute top-0 right-0"}>

                </div>
                <div className={"border p-3  px-8 rounded-xl"}>
                    <Heading title={data ? data.name : "Docteur X"} subtitle={data ? data.extra : "disponible"} text={
                        <>
                            <li className={"ml-4"}>Profession : {data ?data.profession : ""}</li>
                            <li className={"ml-4"}>Adresse : {data ?data.adresse : ""} </li>
                            <li className={"ml-4"}>Téléphone : {data ? data.telephone : ""} </li>
                        </>
                    } />
                </div>
            </div>

            <div className={"mx-auto w-fit"}>
                <Calendar />
            </div>
        </div>

    </>)
}