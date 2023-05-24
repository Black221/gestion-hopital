import {Header} from "../components/Share/Header.jsx";
import {Content} from "../components/Doctor/Content.jsx";
import {Sidebar} from "../components/Doctor/Sidebar.jsx";

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