
import { Routes, Route } from 'react-router-dom'
import {Planning} from "./pages/Planning.jsx";
import Layout from "./Layout.jsx";

export const RendezVous = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/planning"} element={ <Planning /> } />
                    <Route path={"/ajout"} element={ <h1>Ajout</h1> } />
                </Route>
            </Routes>
        </>
    )
}