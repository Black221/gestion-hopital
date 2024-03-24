import { Routes, Route } from 'react-router-dom'
import {SearchDossiers} from "./pages/SearchDossiers.jsx";
import Layout from "./Layout.jsx";


export const Dossiers = () => {
    return (

        <>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/recherche"} element={ <SearchDossiers/> } />
                    <Route path={"/ajout"} element={ <h1>Rendez-vous</h1> } />
                    <Route path={"/fichier-medical"} element={ <h1>Rendez-vous</h1> } />
                    <Route path={"/:id"} element={ <div> </div>} />
                </Route>
            </Routes>
        </>
    )
}