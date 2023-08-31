import down from "../../../assets/down.svg";
import up from "../../../assets/up.svg";
import {NavLink} from "react-router-dom";
import {useState} from "react";


const DropLink = ({ label = "label", icon = null, links = [{name : "", icon: null, to : ""}] }) => {

    const [drop, setDrop] = useState(true);

    return (<>
        <div className={`w-full text- px-4 space-y-5`}>
            <h3 onClick={() => setDrop(!drop)} className={"font-semibold flex items-center space-x-2"}>
                {icon}
                {label}
                {!drop ? <img src={down} className={"w-8"} alt="" /> :  <img src={up} className={"w-8"} alt="" />}
            </h3>

            <ul className={`text-sm space-y-3 border p-4 rounded-xl ease-in-out delay-75 ${drop ? "w-auto h-auto py-4" : " h-0 overflow-hidden py-0"}`}>
                {links.map((link, index) => {
                    return (<li key={index}>
                        <NavLink className="flex items-center space-x-2"  to={link.to} >
                            {link.icon}
                            {link.name}
                        </NavLink>
                    </li>)
                })}
            </ul>
        </div>
    </>)
}

export default DropLink;