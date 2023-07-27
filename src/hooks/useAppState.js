import {useContext} from "react";
import {AppStateContext} from "../context/AppContext.jsx";


const useAppState = () => {
    return  useContext(AppStateContext)
}

export default useAppState;