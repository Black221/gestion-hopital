import {Calendar} from "../Share/Calendar.jsx";

import left from "../../../assets/arrow-left.svg";
import right from "../../../assets/arrow-right.svg";
import {AgendaHead} from "../Share/AgendaHead.jsx";
import {Breadcrumb} from "../Share/Breadcrumb.jsx";
import {Event} from "../Share/Event.jsx";
import {DailyDisplay} from "../Share/DailyDisplay.jsx";

export const Agenda = () => {



    return (<>

        <Breadcrumb link={["medecin", "agenda"]} />

        <div className={"py-4"}>

            <AgendaHead />

            <div className={`flex flex-wrap-reverse  mb-10 border-b border-r`}>
                <div className={`flex-1`}>
                    <DailyDisplay />
                </div>
                <Calendar />
            </div>


            <Event />
        </div>

    </>)
}