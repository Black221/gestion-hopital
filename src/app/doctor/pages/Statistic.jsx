import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import emptyData from "../../../assets/no-data.avif";


export const Statistic = () => {

    return(<>
        <Breadcrumb link={["medecin", "Notifications"]} />

        <div className={"flex items-center justify-center"}>
            <img src={emptyData} alt=""/>
        </div>
    </>)
}