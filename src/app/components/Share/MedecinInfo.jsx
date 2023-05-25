import {Heading} from "./Heading.jsx";
import {NavLink} from "react-router-dom";


export const MedecinInfo = ({data, getSelectedMedecin}) => {

    return (<>
        <div className={"relative pt-10 flex items-center justify-center my-4"}>

            <div className={"rounded-full top-0 w-20 h-20 mx-auto bg-red-200 absolute"}>
                <img src={data ? data.img : ""} alt=""/>
            </div>

            <div className={"border rounded-xl pt-1  w-full"}>
                <Heading title={data ? data.name : "Docteur X"} subtitle={data ? data.extra : "disponible"} text={
                    <ul className={"ml-4"}>
                        <li>Profession : {data ?data.profession : ""}</li>
                        <li>Adresse : {data ?data.adresse : ""} </li>
                        <li>Téléphone : {data ? data.telephone : ""} </li>
                    </ul>
                } />


                {data && <div className={"text-end p-3 space-x-2"}>
                    <button onClick={() => getSelectedMedecin(data.id)}
                            className={"py-1 px-8 rounded-lg bg-green-400 text-white font-bold"}>Contacter
                    </button>
                    <NavLink to={`/patient/rendez-vous/${data.id}`}
                             className={"py-1 px-8 rounded-lg bg-blue-400 text-white font-bold"}>Voir profil</NavLink>
                </div>}

            </div>

        </div>
    </>)
}