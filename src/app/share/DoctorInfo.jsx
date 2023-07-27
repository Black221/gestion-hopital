import {NavLink} from "react-router-dom";
import doctor from "../../assets/doctor.svg";

const DoctorInfo = ({data, getSelectedDoctor}) => {

    return (<>
        <div className={"relative flex items-center justify-center my-4"}>

            <div className={"rounded-xl w-20 h-20 mx-auto  "}>
                <img src={data && data.img ? data.img : doctor} alt=""/>
            </div>

            <div className={" rounded-xl flex-1 pl-4"}>

                <div>
                    <p className={"capitalize font-semibold text-base"}>{data.user.firstname+" "+data.user.lastname}</p>
                    <p>profession</p>
                </div>

                <div className={"text-end p-3  text-sm"}>

                    <NavLink to={`/patient/rendez-vous/${data.user.login}`}
                             className={"py-1 px-8 rounded-lg bg-blue-400 text-white font-bold"}>Voir</NavLink>
                </div>
            </div>

        </div>
    </>)
}

export  default DoctorInfo;