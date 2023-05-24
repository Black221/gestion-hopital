import {Heading} from "./Heading.jsx";
import {MeasurementInfo} from "./MeasurementInfo.jsx";
import {Textarea} from "./Textarea.jsx";


export const DiagnosticForm = ({data}) => {



    return (<>

        <div className={" pb-10 "}>
            <Heading title={"Mesures prisent"} subtitle={"10/12/2023"} />

            <MeasurementInfo data={data} />

            <div className={"py-5"}></div>
            <Heading title={"Ordonnance"} />

            <div className={"px-10"}>
                <Textarea row={10} />
            </div>
        </div>
    </>)
}