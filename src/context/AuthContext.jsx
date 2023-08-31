

import  {createContext, useState} from "react";

export const AuthStateContext = createContext(undefined);


export const AuthContextProvider = ({ children}) => {

    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [role, setRole] = useState(null);

    const login = (data) => {

        console.log(data)
        setUser({login: data.login, id: data.id, firstname: data.firstname, lastname: data.lastname});
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken)
        setRole(data.role);
    }

    const logout = () => {

        setUser(null);
        setAccessToken(null);
        setRole(null);
    }

    const refresh = (token) => {
        setAccessToken(token)
    }

    return (
        <AuthStateContext.Provider value={{
            user, login, logout,
            role,
            accessToken, refreshToken, refresh
        }}>
            {children}
        </AuthStateContext.Provider>
    )
}

