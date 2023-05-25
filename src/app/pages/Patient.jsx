import {Header} from "../components/Share/Header.jsx";
import {useAppStateContext} from "../context/AppContext.jsx";
import {Content} from "../components/Patient/Content.jsx";

import menu from "../../assets/menu.svg";

export const Patient = () => {

    const {screenSize} = useAppStateContext();

    return (<>
        <div className={" w-screen h-screen overflow-hidden"}>

            <div className={`mx-auto md:max-w-4xl bg-white h-screen border-x-2  relative`}>

                <div className={"sticky ml-3 h-0  top-24 z-50"}>
                    <button className={" w-16 h-16 drop-shadow shadow rounded-full flex items-center justify-center bg-white"}>
                        <img src={menu} className={"w-5"} alt=""/>
                    </button>
                </div>

                <Header />

                <Content />

            </div>
        </div>
    </>)
}