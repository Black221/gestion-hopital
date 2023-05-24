import {Heading} from "./Heading.jsx";
import {MeasurementInfo} from "./MeasurementInfo.jsx";
import {Textarea} from "./Textarea.jsx";
import {useState} from "react";
import moment from "moment";


export const DiagnosticForm = ({data}) => {

    const [ordonnance, setOrdonnace] = useState(data.ordonnance);


    return (<>

        <div className={" pb-10 "}>
            <Heading title={"Mesures prisent"} subtitle={data.date} />

            <MeasurementInfo data={data} />

            <div className={"py-5"}></div>
            <Heading title={"Ordonnance"} />

            <div className={"px-10"}>
                <Textarea row={10} value={ordonnance} setValue={setOrdonnace} disabled={data.date !== moment().format("D/M/YYYY")} />
            </div>

            {data.date === moment().format("D/M/YYYY") && <div className={"text-end pt-10"}>
                <button
                    onClick={() => {
                    }}
                    type="submit"
                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    Sauvegarder
                </button>
            </div>}
        </div>
    </>)
}