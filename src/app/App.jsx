// External importation
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';

//Internal importation
import {Home} from "./pages/Home.jsx";
import {Doctor} from "./pages/Doctor.jsx";
import {Patient} from "./pages/Patient.jsx";
import {Admin} from "./pages/Admin.jsx";
import {useEffect} from "react";
import {NotFound} from "./pages/NotFound.jsx";


function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


function App() {

    return (<>
        <div className="">
            <BrowserRouter>
                <ScrollToTop />

                <div>
                    <Routes>
                        {/*Home page*/}
                        <Route path={`/`} exact element={ <Home /> } />

                        {/*Doctor page*/}
                        <Route path={`/medecin/*`} exact element={ <Doctor /> } />

                        {/*Patient page*/}
                        <Route path={`/patient/*`} exact element={ <Patient /> } />

                        {/*Admin page*/}
                        <Route path={`/office/*`} exact element={ <Admin /> } />

                        <Route path={`*`} element={ <NotFound /> } />

                    </Routes>
                </div>

            </BrowserRouter>

        </div>
    </>)

}

export default App
