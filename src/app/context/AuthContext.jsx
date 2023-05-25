

import  {createContext, useContext, useState} from "react";

const StateContext = createContext(undefined);


export const AuthContextProvider = ({ children}) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const onLogin = (user) => {
        setUser(user);
        window.localStorage.setItem("user", user);
    }

    const onLogout = () => {
        setUser(null);
        window.localStorage.clear();
    }

    return (
        <StateContext.Provider value={{
            user, onLogout, onLogin,
            token, setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useAuthStateContext = () => useContext(StateContext)