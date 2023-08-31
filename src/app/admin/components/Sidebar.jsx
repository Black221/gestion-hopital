

//Internal importation
import logo from "../../../assets/logoWithText (2).png";
import DropLink from "../../doctor/components/DropLink.jsx";

const Sidebar = () => {

    return (<>

        <div className={`w-64 bg-white overflow-y-hidden`}>
            <div className={`w-64 bg-main-bg h-screen drop-shadow-2xl shadow fixed z-10 text-center space-y-10   top-0`}>

                <div className={"flex flex-col h-full overflow-y-auto"}>

                    <img src={logo} alt="" className={`w-2/3 mx-auto rounded`}/>

                    <hr className={"w-3/5 mx-auto border-1 border-black"}/>

                    <div className={`w-full  text-start space-y-4 flex-1 py-8 `}>

                        <DropLink label={"Gestion des Patients"} links={[
                            {to: "list", name: "list", icon: null},
                            {to: "modifier", name: "rechercher", icon: null},
                            {to: "activé compte", name: "activé compte", icon: null},
                            {to: "désactivé compte", name: "désactivé compte", icon: null},
                        ]} />

                        <DropLink label={"Gestion des Medecins"} links={[
                            {to: "list", name: "list", icon: null},
                            {to: "modify", name: "rechercher", icon: null},
                            {to: "activé compte", name: "activé compte", icon: null},
                            {to: "désactivé compte", name: "désactivé compte", icon: null},
                        ]} />

                        <DropLink label={"Logs"} links={[
                            {to: "patient", name: "patient-log", icon: null},
                            {to: "patient", name: "medecin-log", icon: null},

                        ]} />

                        <DropLink label={"Statistics"} links={[
                            {to: "global", name: "global", icon: null},
                            {to: "medecin", name: "medecin", icon: null},
                            {to: "patient", name: "patient", icon: null}
                        ]} />

                        <DropLink label={"Activités"} links={[
                            {to: "", name: "voir activite", icon: null}
                        ]} />

                    </div>

                    {/* <div className={`w-full text-xl px-4 pb-4 flex justify-between items-center`}>
                            <h3 className={"font-semibold flex items-center text-lg space-x-2"}><img className={"w-5 mr-2"} src={setting} alt=""/> Setting</h3>
                        <NavLink to={"/login"} className={"font-semibold flex items-center space-x-2"}><img className={"w-5"} src={logout} alt=""/></NavLink>
                    </div>*/}
                </div>
            </div>
        </div>

    </>)
}



export default Sidebar;