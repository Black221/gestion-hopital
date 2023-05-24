import {Input} from "../Share/Input.jsx";
import {useEffect, useState} from "react";
import {useAppStateContext} from "../../context/AppContext.jsx";
import {Textarea} from "../Share/Textarea.jsx";
import moment from "moment";


export const PatientForm = ({validate, save, isSaved}) => {

    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [nationalite, setNationalite] = useState("");
    const [cni, setCni] = useState("");
    const [age, setAge] = useState();
    const [telephone, setTelephone] = useState("");
    const [sexe, setSexe] = useState("M");
    const [adresse, setAdresse] = useState("");
    const [antecedents, setAntecedents] = useState("");

    const {patients, setPatients} = useAppStateContext();

    useEffect(() => {
        if (save)
            setPatients([...patients,{
                id: patients.length + 1,
                prenom, nom, nationalite, age, telephone, sexe, adresse, cni,
                antecedents,
                mesures : [{
                    date: moment().format("D/M/YYYY"),
                    omronConnect: "test data omronConnect",
                    viHealth: "test data viHealth",
                    veSync: "test data veSync",
                    ordonnance: "",
                }]
            }]);

        isSaved(true)
    }, [save])

    useEffect(() => {

        if (prenom !== "" && nom !== "" && nationalite !== "" && age !== 0 && telephone !== "" && sexe !== "" && adresse !== "")
            validate(true)
        else
            validate(false)

    }, [prenom, nom, nationalite, age, telephone, sexe, adresse])

    return (<>

        <div>
            <div className={"px-4 border rounded-xl"}>

                <h2 className="text-xl font-bold py-5 text-center leading-7 text-gray-900">Informations personnelles</h2>
                <hr/>
                <div className="py-4">

                    <div className=" grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">

                        <Input label={"Prenom"} type={"text"} value={prenom} setValue={setPrenom} className={"sm:col-span-4"} />
                        <Input label={"Nom"}  type={"text"} value={nom} setValue={setNom} className={"sm:col-span-2"} />
                        <Input label={"Age"} value={age} setValue={setAge} className={"sm:col-span-2"} type={"number"} />
                        <Input label={"Adresse"}  type={"text"} value={adresse} setValue={setAdresse} className={"sm:col-span-4"} />
                        <Input label={"Nationalité"} value={nationalite} setValue={setNationalite} className={"sm:col-span-3"} />
                        <Input label={"cni"} type={"text"} value={cni} setValue={setCni} className={"sm:col-span-3"} />

                        <div className="sm:col-span-3">
                            <label htmlFor="sexe" className="block text-sm font-medium leading-6 text-gray-900">
                                Sexe
                            </label>
                            <div className="mt-2">
                                <select
                                    value={sexe}
                                    onChange={(e) => setSexe(e.target.value)}
                                    id="sexe"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option value="H">Homme</option>
                                    <option value="F">Femme</option>
                                </select>
                            </div>
                        </div>

                        <Input label={"telephone"} value={telephone} setValue={setTelephone} className={"sm:col-span-3"} />

                    </div>
                </div>

            </div>

            <Textarea row={4} label={"Antécédents"} setValue={setAntecedents} value={antecedents} />
        </div>

    </>)
}