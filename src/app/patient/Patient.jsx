import {Header} from "../share/Header.jsx";
import {Content} from "./Content.jsx";

import menu from "../../assets/menu.svg";
import useAppState from "../../hooks/useAppState.js";
import BottomTab from "./components/BottomTab.jsx";

export const Patient = () => {


    return (<>
        <div className={" w-screen h-screen overflow-hidden"}>

            <div className={`mx-auto md:max-w-4xl bg-white h-screen border-x-2  relative`}>

                <Header />

                <div className={"h-[calc(100vh-5rem)] overflow-y-auto"}>
                    <Content />
                </div>

                <BottomTab />

            </div>
        </div>
    </>)
}