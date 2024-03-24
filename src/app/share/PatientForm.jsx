import {Input} from "./Input.jsx";
import {useCallback, useEffect, useState} from "react";
import {Textarea} from "./Textarea.jsx";


export const PatientForm = ({data, getPatient}) => {

    const [firstname, setFirstname] = useState(data ? data.firstname : "");
    const [lastname, setLastname] = useState(data ? data.lastname : "");
    const [birthday, setBirthDay] = useState(data ? data.birthday : "");
    const [nationality, setNationality] = useState(data ? data.nationality : "");
    const [sex, setSex] = useState(data ? data.sex : "Man");
    const [address, setAddress] = useState(data ? data.address : "");
    const [ethnicGroup, setEthnicGroup] = useState(data ? data.ethnicGroup : "");
    const [profession, setProfession] = useState(data ? data.profession : "");
    const [origin, setOrigin] = useState(data ? data.origin : "");
    const [matrimony, setMatrimony] = useState(data ? data.matrimony : "");
    const [placeOfBirth, setPlaceOfBirth] = useState(data ? data.placeOfBirth : "");
    const [diseasesHistory, setDiseasesHistory] = useState(data ? data.diseasesHistory : "");
    const [religion, setReligion] = useState(data ? data.religion : "");



    const isValidate = useCallback(() => {
        return firstname !== "" && lastname !== "" && birthday !== "" && sex !== "";
    }, [birthday, firstname, lastname, sex])
    
    useEffect(() => {
        if (isValidate())
            getPatient({
                firstname, lastname, birthday,
                sex, religion, diseasesHistory,
                placeOfBirth, matrimony, origin,
                address, ethnicGroup, nationality,
                profession
            })

    }, [address, diseasesHistory, birthday, ethnicGroup, firstname, getPatient, isValidate, lastname, matrimony, nationality, origin, placeOfBirth, profession, religion, sex])


    return (<>

        <div>
            <div className={"px-4 border rounded-xl"}>

                <h2 className="text-xl font-bold py-5 text-center leading-7 text-gray-900">Informations personnelles</h2>
                <hr/>
                <div className="py-4">

                    <div className=" grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">

                        <Input label={"Prenom"} type={"text"} value={firstname} setValue={setFirstname} className={"sm:col-span-4"} />
                        <Input label={"Nom"}  type={"text"} value={lastname} setValue={setLastname} className={"sm:col-span-2"} />
                        <Input label={"Date de naissance"}  type={"date"} value={birthday} setValue={setBirthDay} className={"sm:col-span-2"} />
                        <Input label={"Lieu de naissance"}  type={"text"} value={placeOfBirth} setValue={setPlaceOfBirth} className={"sm:col-span-4"} />
                        <Input label={"Profession"}  type={"text"} value={profession} setValue={setProfession} className={"sm:col-span-3"} />
                        <Input label={"Situation matrimoniale"}  type={"text"} value={matrimony} setValue={setMatrimony} className={"sm:col-span-3"} />

                        <div className="sm:col-span-1">
                            <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
                                Sexe
                            </label>
                            <div className="mt-2">
                                <select
                                    value={sex}
                                    onChange={(e) => setSex(e.target.value)}
                                    id="sexe"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="Man">Homme</option>
                                    <option value="Woman">Femme</option>
                                </select>
                            </div>
                        </div>
                        <Input label={"Nationalité"} value={nationality} setValue={setNationality} className={"sm:col-span-3"} />
                        <Input label={"Religion"}  type={"text"} value={religion} setValue={setReligion} className={"sm:col-span-2"} />

                        <Input label={"Adresse"}  type={"text"} value={address} setValue={setAddress} className={"sm:col-span-2"} />
                        <Input label={"Origine géographique"}  type={"text"} value={origin} setValue={setOrigin} className={"sm:col-span-2"} />
                        <Input label={"Ethnie"}  type={"text"} value={ethnicGroup} setValue={setEthnicGroup} className={"sm:col-span-2"} />
                    </div>
                </div>

            </div>

            <Textarea disabled={false} className={""} row={4} label={"Antécédents"} setValue={setDiseasesHistory} value={diseasesHistory} />
        </div>

    </>)
}