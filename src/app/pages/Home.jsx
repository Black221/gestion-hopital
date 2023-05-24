import {NavLink} from "react-router-dom";


export const Home = () => {

    return (<>

        <div className={"flex items-center justify-center h-screen text-2xl text-blue-600"}>
            <NavLink to={"/medecin"}>Medecin dashboard</NavLink>
        </div>
    </>)
}