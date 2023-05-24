import {InputValue} from "./InputValue.jsx";
import {Spinner} from "./Spinner.jsx";


export const PatientInfo = ({data}) => {

    console.log(data)
    return (<>

        <div className={"px-4 w-5/12  border rounded-xl"}>
            <h2 className="text-xl font-bold py-5 text-center leading-7 text-gray-900">Informations personnelles</h2>
            <hr/>
            <div className="py-4">

                {data ? <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <InputValue label={"Prenom"} value={data.prenom} className={"sm:col-span-4"}/>
                    <InputValue label={"Nom"} value={data.nom} className={"sm:col-span-2"}/>
                    <InputValue label={"Age"} value={data.age} className={"sm:col-span-2"} type={"number"}/>
                    <InputValue label={"Sexe"} value={data.sexe} className={"sm:col-span-3"}/>
                    <InputValue label={"Adresse"} value={data.adresse} className={"sm:col-span-4"}/>
                    <InputValue label={"Nationalité"} value={data.nationalite} className={"sm:col-span-3"}/>
                    <InputValue label={"CNI"} value={data.cni} className={"sm:col-span-3"}/>

                </div> : <Spinner />}
            </div>

        </div>

    </>)
}