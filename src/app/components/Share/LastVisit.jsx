import {NavLink} from "react-router-dom";

export const LastVisit = () => {

    const visit = [
        {date: "Jan, 12 2023", start: "10h:23", end: "11h:04"},
        {date: "Jan, 12 2023", start: "10h:23", end: "11h:04"},
        {date: "Jan, 12 2023", start: "10h:23", end: "11h:04"},
        {date: "Jan, 12 2023", start: "10h:23", end: "11h:04"},
    ]
    return (<>

        <h2 className="mb-2 text-lg font-bold text-gray-900 mt-4">Dernieres visites</h2>
        <ul className="pl-5 mt-2 space-y-3 list-disc list-inside text-blue-400">
            {visit.map((v, index) => (
                <li key={index} className={`${index === visit.length - 1 ? "" : "border-b border-gray-200"} flex items-center justify-between space-x-5 py-4`}>

                    <div className={"text-gray-500"}>{v.date}</div>
                    <div className={"flex-1 flex items-center justify-between"}>
                        <div className={"text-gray-500 text-sm space-x-4"}>
                            <span>{v.start + ' - ' + v.end}</span>
                            <NavLink to={"/medecin/voir-dossier/4"} className={"text-blue-400"}>consulter</NavLink>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </>)
}