import {Route, Routes} from "react-router-dom";
import {AddMedecin} from "./pages/AddMedecin.jsx";
import Layout from "./Layout.jsx";
import {Search} from "./pages/Search.jsx";
import {AddAssistant} from "./pages/AddAssistant.jsx";


export default function Account() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/ajout-assistant"} element={ <AddAssistant/> } />
                    <Route path={"/ajout-medecin"} element={ <AddMedecin/> } />
                    <Route path={"/recherche"} element={ <Search /> } />
                </Route>
            </Routes>
        </>
    )
}