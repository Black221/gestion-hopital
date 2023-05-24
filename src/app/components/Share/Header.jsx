//External importation

//Internal importation
import userSvg from "../../../assets/profile.svg";
import down from "../../../assets/down.svg"
import notification from "../../../assets/notification.svg"
import {useAppStateContext} from "../../context/AppContext.jsx";

export const Header = () => {

    const {user} = useAppStateContext();

    return (<>

        <div className={`h-20 flex items-center justify-between shadow w-full px-8 sticky top-0 bg-white z-50`}>
            <div className={`font-bold text-main text-center`}>
                <div>Oasis care</div>
                <div className={"text-xs font-light"}>L'acces aux soins ou que vous soyez</div>
            </div>
            <div className={`flex items-center space-x-4 text-main text-xl`}>

                <img className={"w-6"}  src={notification} alt=""/>
                <div>{user}</div>
                <div className={` flex rounded-full`}>
                    <img className={"w-6"}  src={userSvg} alt=""/>
                    <img className={"w-5"} src={down} alt=""/>
                </div>

            </div>
        </div>
    </>)
}