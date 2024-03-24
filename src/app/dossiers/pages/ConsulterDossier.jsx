import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {useState} from "react";
import {useParams} from "react-router-dom";


export const ConsulterDossier = () => {

    const [dossier, setDossier] = useState({});
    const {id} = useParams();

    return (
        <>
            <Breadcrumb link={[
                "Dossiers", "Consulter Dossier", id
            ]} />
        </>
    )
}