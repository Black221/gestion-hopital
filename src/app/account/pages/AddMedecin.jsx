import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {useCallback,  useState} from "react";
import {AccountForm} from "../../share/AccountForm.jsx";


export const AddMedecin = () => {


    const [data, setData] = useState(null);
    const getForm = useCallback((data) => {
        setData(data);
    }, [setData])



    return (
        <>
            <Breadcrumb link={[
                "Dashboard", "Comptes", "Ajout Medecin"
            ]} direct={false}/>

            <div className={"space-y-4 mt-4"}>
                <AccountForm data={data} getPatient={getForm}/>

                <div className={"text-end"}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Ajouter
                    </button>
                </div>
            </div>
        </>
    )
}