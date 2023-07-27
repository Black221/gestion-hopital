//External importation

//Internal importation
import userSvg from "../../assets/profile.svg";
import down from "../../assets/down.svg"
import notification from "../../assets/notification.svg"
import useAuth from "../../hooks/useAuth.js";
import {NavLink} from "react-router-dom";
import logout from "../../assets/door-open.svg";

export const Header = () => {

    const {user} = useAuth();

    return (<>

        <div className={`md:h-20 h-16 flex items-center justify-between shadow w-full md:px-8 sticky top-0 bg-white z-50`}>
            <div className={`font-bold text-main text-center`}>
                <div className={"text-green-500"}>Oasis care</div>
                <div className={"text-xs font-light"}>L'acces aux soins ou que vous soyez</div>
            </div>
            <div className={`flex items-center space-x-4 text-main text-xl`}>

                <NavLink to={"/login"} className={"font-semibold flex items-center space-x-2"}><img className={"w-5"} src={logout} alt=""/></NavLink>
                {/*<img className={"w-6"}  src={notification} alt=""/>*/}
                <div className={"hidden md:block"}>{user.login}</div>
                <div className={` flex rounded-full`}>
                    <img className={"w-6"}  src={userSvg} alt=""/>
                    {/*<img className={"w-5"} src={down} alt=""/>*/}
                </div>

            </div>
        </div>
    </>)
}