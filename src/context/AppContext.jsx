import {createContext, useContext, useState} from "react";
import {PATIENT} from "../app/dummy.js";

export const AppStateContext = createContext(undefined);


export const AppContextProvider = ({ children}) => {

    const [user, setUser] = useState("LHacSRT")
    const [patients, setPatients] = useState(PATIENT);
    const [screenSize, setScreenSize] = useState(0);
    const login = (log) => {

        localStorage.setItem('user', log.user)
        setUser(log.user)
    }

    return (
        <AppStateContext.Provider value={{
            user, login,
            patients, setPatients,
            screenSize, setScreenSize
        }}>
            {children}
        </AppStateContext.Provider>
    )
}

