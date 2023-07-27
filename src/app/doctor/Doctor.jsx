import {Header} from "../share/Header.jsx";
import {Content} from "./Content.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import useRefreshToken from "../../hooks/useRefreshToken.js";
import {useEffect} from "react";

export const Doctor = () => {


    return (<>

        <div className={`flex h-screen w-screen justify-start overflow-hidden`}>

            <Sidebar />

            <div className={`overflow-hidden flex-1 w-[calc(100vh-5rem)] relative`}>

                <Header />

                <Content />
            </div>
        </div>

    </>)
}