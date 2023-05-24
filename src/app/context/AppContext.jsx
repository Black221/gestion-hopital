import {createContext, useContext, useState} from "react";
import {PATIENT} from "../dummy.js";

const StateContext = createContext(undefined);


export const AppContextProvider = ({ children}) => {

    const [user, setUser] = useState("LHacSRT")
    const [patients, setPatients] = useState(PATIENT);

    const login = (log) => {

        localStorage.setItem('user', log.user)
        setUser(log.user)
    }

    return (
        <StateContext.Provider value={{
            user, login,
            patients, setPatients
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useAppStateContext = () => useContext(StateContext)