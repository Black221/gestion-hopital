import {Breadcrumb} from "../../share/Breadcrumb.jsx";
import {NavLink} from "react-router-dom";
import emptyData from "../../../assets/no-data.avif";

export const Notification = () => {

    const event = [
        {day: "Wed, Jan 12", event: [
                {date: "Patient", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
                {date: "Patient", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
                {date: "Patient", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
                {date: "Patient", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
        ]},
        {day: "Wed, Jan 12", event: [
                {date: "Wed, Jan 12", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
                {date: "Wed, Jan 12", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
                {date: "Wed, Jan 12", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
                {date: "Wed, Jan 12", title: "Rockaya", start: "2:30 PM", end: "2:30 PM"},
        ]},
    ];



    return(<>
        <Breadcrumb link={["medecin", "Notifications"]} />

        <div className={"flex items-center justify-center"}>
            <img src={emptyData} alt=""/>
        </div>
        {/*
        <div>
            <ul className={""}>
                {event.map((d, index) => (
                    <li key={index} className={"my-4"}>
                        <h3 className={"font-bold"}>{d.day}</h3>
                        {d.event.map((e, index_e) => (
                            <li key={index_e} className={`${index_e === d.event.length - 1 ? "" : "border-b border-gray-200"} ml-6  py-4`}>

                                <div className={"flex items-center justify-between space-x-5"}>
                                    <div className={"text-gray-500"}>{e.date}</div>
                                    <div className={"flex-1 flex items-center justify-between"}>
                                        <span className={"font-semibold"}>{e.title}</span>
                                        <div className={"text-gray-500 text-sm space-x-4"}>
                                            <NavLink to={"/medecin/voir-dossier/4"} className={"text-blue-400"}>afficher profil</NavLink>
                                            <span>{e.start + ' - ' + e.end}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className={"w-10/12 p-4 border rounded-lg mx-auto my-4"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, earum eos fuga necessitatibus nihil nulla obcaecati perspiciatis quis recusandae voluptate? Eligendi id, iste provident repudiandae saepe tempora unde voluptatem! Ipsum.
                                </p>
                                <div className={"text-end space-x-4"}>

                                    <button
                                        className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                                        Decliner
                                    </button>

                                    <button
                                        className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                                        Accepter
                                    </button>
                                </div>
                            </li>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
        */}
    </>)
}