import { Routes, Route } from 'react-router-dom'
import {SearchDossiers} from "./pages/SearchDossiers.jsx";
import Layout from "./Layout.jsx";
import {AjoutDossier} from "./pages/AjoutDossier.jsx";
import {CompleterDossier} from "./pages/CompleterDossier.jsx";
import {ConsulterDossier} from "./pages/ConsulterDossier.jsx";


export const Dossiers = () => {
    return (

        <>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/recherche"} element={ <SearchDossiers/> } />
                    <Route path={"/ajout"} element={ <AjoutDossier /> } />
                    <Route path={"/completer/:id"} element={ <CompleterDossier /> } />
                    <Route path={"/consulter/:id"} element={ <ConsulterDossier /> } />
                    <Route path={"/fichier-medical"} element={ <h1>Rendez-vous</h1> } />
                </Route>
            </Routes>
        </>
    )
}