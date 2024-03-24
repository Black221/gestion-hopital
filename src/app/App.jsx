import {Routes, Route} from 'react-router-dom';
import {useEffect} from "react";
import {NotFound} from "./notFound/NotFound.jsx";
import {Login} from "./auth/pages/Login.jsx";
import useAppState from "../hooks/useAppState.js";
import Layout from "./Layout.jsx";
import {Home} from "./home/Home.jsx";
import Account from "./account/Account.jsx";
import {Dossiers} from "./dossiers/Dossiers.jsx";
import {RendezVous} from "./rendez-vous/RendezVous.jsx";

{/*
function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
*/}

export const App = () =>  {

    const {
        setScreenSize,
    } = useAppState();

    //const auth = useAuth();


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth ? window.innerWidth : 0);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [setScreenSize]);


    return (<>
        <Routes>
            <Route path="/" element={ <Layout /> }>

                <Route path={`/`} exact element={ <Home /> } />
                <Route path={`/login`} exact element={ <Login /> } />
                <Route path={`/comptes/*`} element={ <Account /> } />
                <Route path={`/dossiers/*`} element={ <Dossiers /> } />
                <Route path={`/rendez-vous/*`} element={ <RendezVous /> } />

                {/*Not Found page*/}
                <Route path={`*`} element={ <NotFound /> } />
            </Route>
        </Routes>
    </>)
}

