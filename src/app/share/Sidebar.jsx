

//Internal importation


import {DropLink} from "./DropLink.jsx";
import useAuth from "../../hooks/useAuth.js";

export const Sidebar = () => {

    const auth = useAuth();

    return (<>

        <div className={`w-72 bg-white overflow-y-hidden`}>
            <div className={`w-72 bg-main-bg h-screen drop-shadow-2xl shadow fixed z-10 text-center space-y-10   top-0`}>

                <div className={"flex flex-col h-full overflow-y-auto"}>

                    <div className={"w-2/3 mx-auto min-h-[160px] rounded bg-red-400 my-10"} />

                    <hr className={"w-3/5 mx-auto border-1 border-black"}/>

                    <div className={`w-full  text-start space-y-4 flex-1 py-8 `}>

                        <DropLink label={"Gestion des comptes"} links={auth && auth.role === "Admin" ? [
                            {to: "comptes/recherche", name: "Rechercher", icon: <SearchIcon/>},
                            {to: "comptes/ajout-medecin", name: "Créer compte médecin", icon: AccountIcon()},
                        ] : (auth && auth.role === "Medecin" ? [
                            {to: "comptes/recherche", name: "Rechercher", icon: <SearchIcon/>},
                            {to: "comptes/ajout-assistant", name: "Créer compte assistant", icon: AccountIcon()},
                        ] : [])} />

                        <DropLink label={"Gestion des dossiers"} links={ auth && auth.role !== "Admin" ? [
                            {to: "dossiers/ajout", name: "Créer un dossier", icon: PatientIcon()},
                            {to: "dossiers/recherche", name: "Rechercher dossier", icon: SearchIcon()},
                            {to: "dossiers/fichier-medical", name: "Enregister fichier médical", icon: ScannerIcon()},
                        ] : []} />

                        <DropLink label={"Gestion rendez-vous"} links={ auth && auth.role === "Medecin" ? [
                            {to: "rendez-vous/planning", name: "Gérer planning", icon: CalendarIcon()},
                            {to: "rendez-vous/ajout", name: "Ajouter rendez-vous", icon: CalendarAddIcon()},
                        ] : auth && auth.role === "Assistant" ? [
                            {to: "rendez-vous/ajout", name: "Ajouter rendez-vous", icon: CalendarAddIcon()}
                        ] : []} />
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

const SearchIcon = () => {
    return (
        <div className={"mr-2"}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#4571d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    )
}

const AccountIcon = () => {
    return (
        <div className={"mr-2"}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 18L14 18M17 15V21M4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#4571d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    )
}

const CalendarIcon = () => {
    return (
        <div className={"mr-2"}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#4571d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    )
}

const CalendarAddIcon = () => {
    return (
        <div className={"mr-2"}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M12 18V12M15 15.001L9 15M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#4571d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </div>
    )
}

const PatientIcon = () => {
    return (
        <div className={"mr-2"}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="ic_fluent_patient_24_regular" fill="#4571d9" fillRule="nonzero"> <path d="M17.75,2 C18.9926407,2 20,3.00735931 20,4.25 L20,19.754591 C20,20.9972317 18.9926407,22.004591 17.75,22.004591 L6.25,22.004591 C5.00735931,22.004591 4,20.9972317 4,19.754591 L4,4.25 C4,3.05913601 4.92516159,2.08435508 6.09595119,2.00519081 L6.25,2 L17.75,2 Z M18.5,16 L5.5,16 L5.5,19.754591 C5.5,20.1688046 5.83578644,20.504591 6.25,20.504591 L17.75,20.504591 C18.1642136,20.504591 18.5,20.1688046 18.5,19.754591 L18.5,16 Z M7.75128856,17.5 L16.25,17.5 C16.6642136,17.5 17,17.8357864 17,18.25 C17,18.6296958 16.7178461,18.943491 16.3517706,18.9931534 L16.25,19 L7.75128856,19 C7.337075,19 7.00128856,18.6642136 7.00128856,18.25 C7.00128856,17.8703042 7.28344245,17.556509 7.64951801,17.5068466 L7.75128856,17.5 L16.25,17.5 L7.75128856,17.5 Z M17.75,3.5 L6.25,3.5 L6.14822944,3.50684662 C5.78215388,3.55650904 5.5,3.87030423 5.5,4.25 L5.5,14.5 L8,14.5 L8,12.2455246 C8,11.5983159 8.49187466,11.0659907 9.12219476,11.0019782 L9.25,10.9955246 L14.75,10.9955246 C15.3972087,10.9955246 15.9295339,11.4873992 15.9935464,12.1177193 L16,12.2455246 L16,14.5 L18.5,14.5 L18.5,4.25 C18.5,3.83578644 18.1642136,3.5 17.75,3.5 Z M14.5,12.4955246 L9.5,12.4955246 L9.5,14.5 L14.5,14.5 L14.5,12.4955246 Z M12,4.99552458 C13.3807119,4.99552458 14.5,6.11481271 14.5,7.49552458 C14.5,8.87623646 13.3807119,9.99552458 12,9.99552458 C10.6192881,9.99552458 9.5,8.87623646 9.5,7.49552458 C9.5,6.11481271 10.6192881,4.99552458 12,4.99552458 Z M12,6.49552458 C11.4477153,6.49552458 11,6.94323983 11,7.49552458 C11,8.04780933 11.4477153,8.49552458 12,8.49552458 C12.5522847,8.49552458 13,8.04780933 13,7.49552458 C13,6.94323983 12.5522847,6.49552458 12,6.49552458 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
        </div>
    )
}

const ScannerIcon = () => {
    return (
        <div>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11130)"> <path d="M20 12H4" stroke="#4571d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 3.99976H18C19.1046 3.99976 20 4.89519 20 5.99976V7.99976" stroke="#4571d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 19.9998L6 19.9998C4.89543 19.9998 4 19.1043 4 17.9998L4 15.9998" stroke="#4571d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M20 15.9998V17.9998C20 19.1043 19.1046 19.9998 18 19.9998H16" stroke="#4571d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7.99976L4 5.99976C4 4.89519 4.89543 3.99976 6 3.99976L8 3.99976" stroke="#4571d9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11130"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
        </div>
    )
}


