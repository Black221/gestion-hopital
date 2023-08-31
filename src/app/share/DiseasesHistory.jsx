import {Textarea} from "./Textarea.jsx";
import {useEffect, useState} from "react";


const DiseasesHistory = ({data, getValue, disabled = true}) => {

    const [medical, setMedical] = useState("");
    const [surgical, setSurgical] = useState("");
    const [family, setFamily] = useState("");

    useEffect(() => {
        if (data) {
            setMedical(data.personal.medical)
            setSurgical(data.personal.surgical)
            setFamily(data.family)
        }
    }, [data])

    useEffect(() => {
        let data = {
            personal : {
                medical,
                surgical
            }, family : family
        }
        getValue(JSON.stringify(data))
    },[getValue, family, medical, surgical])

    return (<>
        <h1 className={"font-semibold text-sm mb-2"}>Antécédents personnels</h1>
        <div className={"p-4 border rounded-xl mb-6"}>
            <div>
                <Textarea disabled={disabled} label={"Médicaux"} row={2} value={medical} setValue={setMedical}  />
                <Textarea disabled={disabled} label={"Chirurgicaux"} row={2} value={surgical} setValue={setSurgical} />
            </div>
            <h2></h2>
        </div>
        <Textarea disabled={disabled} label={"Antécédents familiaux"} row={3} value={family} setValue={setFamily} />
    </>)
}

export default DiseasesHistory;