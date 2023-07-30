
//External importation
import {NavLink} from "react-router-dom";

//Internal importation
import logo from "../../../assets/logoWithText (2).png";
import addUser from "../../../assets/addUser.svg";
import list from "../../../assets/list.svg";
import dashboard from "../../../assets/dashboard.svg";
import logout from "../../../assets/door-open.svg";
import medical from "../../../assets/medical.svg";
import modify from "../../../assets/modify.svg";
import notification from "../../../assets/notification.svg";
import down from "../../../assets/down.svg"
import up from "../../../assets/up.svg"
import calendar from "../../../assets/calendar.svg"
import {useState} from "react";

export const Sidebar = () => {

    const [dropAction, setDropAction] = useState(true);
    const [dropDashboard, setDropDashboard] = useState(true);

    return (<>

        <div className={`w-64 bg-white`}>
            <div className={`w-64 bg-main-bg h-screen drop-shadow-2xl shadow fixed z-10 text-center pt-10 space-y-10  top-0`}>

                <div className={"flex flex-col h-full"}>

                    <img src={logo} alt="" className={`w-2/3 mx-auto rounded`}/>

                    <hr className={"w-3/5 mx-auto border-1 border-black"}/>

                    <div className={`w-full  text-start space-y-4 flex-1 pt-8`}>

                        <div className={`w-full text- px-4 space-y-5`}>
                            <h3 onClick={() => setDropAction(!dropAction)} className={"font-semibold flex items-center space-x-2"}><img className={"w-6 mr-2"} src={medical} alt=""/> Actions
                                {!dropAction ? <img src={down} className={"w-8"} alt="" /> :  <img src={up} className={"w-8"} alt="" />}
                            </h3>

                            <ul className={`text-sm space-y-3 border p-4 rounded-xl ease-in-out delay-75 ${dropAction ? "w-auto h-auto py-4" : " h-0 overflow-hidden py-0"}`}>
                                <li>
                                    <NavLink className="flex items-center space-x-2"  to={"ajouter-dossier"} >
                                        <img className={"w-6 mr-2"} src={addUser} alt=""/> Ajouter dossier</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center space-x-2"  to={"lister-dossier"}>
                                        <img className={"w-6 mr-2"} src={list} alt=""/> Lister dossier </NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center space-x-2"  to={"modifier-dossier"}>
                                        <img className={"w-6 mr-2"} src={modify} alt=""/> Modifier dossier</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className={`w-full text- px-4 space-y-5`}>

                            <h3 onClick={() => setDropDashboard(!dropDashboard)} className={"font-semibold flex items-center "}><img src={dashboard} className={"w-6 mr-2"} alt=""/>Dashboard
                                {!dropDashboard ? <img src={down} className={"w-8"} alt="" /> :  <img src={up} className={"w-8"} alt="" />}
                            </h3>

                            <ul className={` text-sm space-y-3 border p-4 rounded-xl ease-in-out delay-75 ${dropDashboard ? "w-auto h-auto py-4" : " h-0 overflow-hidden py-0"}`}>
                                <li>
                                    <NavLink className="flex items-center space-x-2" to={"agenda"}>
                                        <img className={"w-6 mr-2"} src={calendar} alt=""/> Disponibilité</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center space-x-2"  to={"notifications"}>
                                        <img className={"w-6 mr-2"} src={notification} alt=""/> Notifications</NavLink>
                                </li>
                                {/*
                                <li>
                                    <NavLink className="flex items-center space-x-2" to={"statistiques"}>
                                        <img className={"w-6 mr-2"} src={stat} alt=""/> Statistiques</NavLink>
                                </li>
                                <li>
                                    <NavLink className="flex items-center space-x-2"  to={"historiques"}>
                                        <img className={"w-6 mr-2"} src={history} alt=""/> Historiques </NavLink>
                                </li>
                                */}

                            </ul>
                        </div>
                        {/*
                        <div className={`w-full text- px-4`}>
                            <h3 className={"font-semibold flex items-center space-x-2"}><img className={"w-6 mr-2"} src={user} alt=""/> Profil</h3>
                        </div>
                        */}

                    </div>

                    <div className={`w-full text-xl px-4 pb-4 flex justify-between items-center`}>
                        {/*
                            <h3 className={"font-semibold flex items-center text-lg space-x-2"}><img className={"w-5 mr-2"} src={setting} alt=""/> Setting</h3>
                        */}
                        <NavLink to={"/login"} className={"font-semibold flex items-center space-x-2"}><img className={"w-5"} src={logout} alt=""/></NavLink>
                    </div>
                </div>
            </div>
        </div>

    </>)
}