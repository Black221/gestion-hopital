import {InputValue} from "./InputValue.jsx";
import {Spinner} from "./Spinner.jsx";
import moment from "moment";


export const PatientInfo = ({data}) => {

    const getAge = (birthday) => {
        const today = moment().format('YYYY');

        return today - moment(birthday).format('YYYY')
    }

    return (<>

        <div className={"px-4 md:w-7/12   border rounded-xl"}>
            <h2 className="text-xl font-bold py-5 text-center leading-7 text-gray-900">Informations personnelles</h2>
            <hr/>
            <div className="py-4">

                {data ? <div className=" grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

                    <InputValue label={"Prenom"} value={data.firstname} className={"sm:col-span-3"}/>
                    <InputValue label={"Nom"} value={data.lastname} className={"sm:col-span-2"}/>
                    <InputValue label={"Sexe"} value={data.sex} className={"sm:col-span-1"}/>
                    <InputValue label={"Date de naissance"} value={moment(data.birthday).format('DD/MM/yyyy')} className={"sm:col-span-2"} type={"date"}/>
                    <InputValue label={"lieu de naissance"} value={data.placeOfBirth} className={"sm:col-span-2"}/>
                    <InputValue label={"matrimonial"} value={data.matrimony} className={"sm:col-span-2"}/>
                    <InputValue label={"Adresse"} value={data.address} className={"sm:col-span-3"}/>
                    <InputValue label={"Ethnie"} value={data.ethnicGroup} className={"sm:col-span-3"}/>
                    <InputValue label={"origin"} value={data.origin} className={"sm:col-span-3"}/>
                    <InputValue label={"Nationalité"} value={data.nationality} className={"sm:col-span-3"}/>
                    <InputValue label={"profession"} value={data.profession} className={"sm:col-span-3"}/>
                    <InputValue label={"religion"} value={data.religion} className={"sm:col-span-3"}/>

                </div> : <Spinner />}
            </div>

        </div>

    </>)
}