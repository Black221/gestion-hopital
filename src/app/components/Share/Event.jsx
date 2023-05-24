import {NavLink} from "react-router-dom";


export const Event = () => {

    const event = [
        {date: "Wed, Jan 12", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
        {date: "Wed, Jan 12", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
        {date: "Wed, Jan 12", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
        {date: "Wed, Jan 12", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
    ];

    return (<>
        <div className={""}>
            <h3 className={"font-bold"}>Evénement</h3>
            <ul className={"ml-4 "}>
                {event.map((e, index) => {

                    return (
                        <li key={index} className={`${index === event.length - 1 ? "" : "border-b border-gray-200"} flex items-center justify-between space-x-5 py-4`}>

                            <div className={"text-gray-500"}>{e.date}</div>
                            <div className={"flex-1 flex items-center justify-between"}>
                                <span className={"font-semibold"}>{e.title}</span>
                                <div className={"text-gray-500 text-sm space-x-4"}>
                                    <NavLink to={"/medecin/voir-dossier/4"} className={"text-blue-400"}>afficher détail</NavLink>
                                    <span>{e.start + ' - ' + e.end}</span>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </>)
}