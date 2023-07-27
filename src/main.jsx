import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app/App.jsx'
import './index.css'
import {AppContextProvider} from "./context/AppContext.jsx";
import {AuthContextProvider} from "./context/AuthContext.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContextProvider>
                <AuthContextProvider>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </AuthContextProvider>
            </AppContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
