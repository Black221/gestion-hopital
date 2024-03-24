import {Input} from "./Input.jsx";
import {useCallback, useEffect, useState} from "react";

export const AccountForm = ({data, getForm}) => {

    const [firstname, setFirstname] = useState(data ? data :"");
    const [lastname, setLastname] = useState(data ? data :"");
    const [profession, setProfession] = useState(data ? data :"");
    const [matrimony, setMatrimony] = useState(data ? data :"");
    const [sex, setSex] = useState(data ? data :"Man");
    const [email, setEmail] = useState(data ? data :"");
    const [phone, setPhone] = useState(data ? data :"");
    const [matricule, setMatricule] = useState(data ? data :"");

    const isValidate = useCallback(() => {
        return firstname !== "" && lastname !== "" && sex !== "";
    }, [firstname, lastname, sex])

    useEffect(() => {
        if (isValidate())
            getForm({
                firstname, lastname, 
                sex, matrimony, email, 
                phone, profession
            })

    }, [firstname, getForm, isValidate, lastname, matrimony, email, phone, profession, sex])

    return (
        <>
            <div>
                <div className={"px-4 border rounded-xl"}>

                    <h2 className="text-xl font-bold py-5 text-center leading-7 text-gray-900">Informations personnelles</h2>
                    <hr/>
                    <div className="py-4">

                        <div className=" grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                            <Input label={"Matricule"} type={"text"} value={matricule} setValue={setMatricule} className={"sm:col-span-4"} />
                            <Input label={"Prenom"} type={"text"} value={firstname} setValue={setFirstname} className={"sm:col-span-3"} />
                            <Input label={"Nom"}  type={"text"} value={lastname} setValue={setLastname} className={"sm:col-span-3"} />
                            <Input label={"Profession"}  type={"text"} value={profession} setValue={setProfession} className={"sm:col-span-3"} />
                            <Input label={"Situation matrimoniale"}  type={"text"} value={matrimony} setValue={setMatrimony} className={"sm:col-span-3"} />
                            <Input label={"Email"}  type={"email"} value={email} setValue={setEmail} className={"sm:col-span-3"} />
                            <Input label={"Telephone"}  type={"tel"} value={phone} setValue={setPhone} className={"sm:col-span-3"} />

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
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}