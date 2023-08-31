import { Outlet } from "react-router-dom";
import {Header} from "../share/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";

const Layout = () => {

    return (
        <main className="overflow-y-hidden">

           <div className={"flex overflow-y-hidden"}>

               <Sidebar />

               <div className={"flex-1"}>
                   <Header />
                   <Outlet />
               </div>

           </div>
        </main>
    )
}

export default Layout;