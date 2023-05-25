import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'
import {AppContextProvider} from "./app/context/AppContext.jsx";
import {AuthContextProvider} from "./app/context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppContextProvider>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </AppContextProvider>
    </React.StrictMode>,
)
