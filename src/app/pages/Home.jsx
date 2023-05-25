import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAuthStateContext} from "../context/AuthContext.jsx";


export const Home = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const [select, setSelect] = useState("patient");

    const [message, setMessage] = useState("")

    const auth = useAuthStateContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.user) {
            navigate("/office");
        }
    }, [auth.user]);

    const onLogin = () => {

        navigate(`/${select}`)
    }

    return (
        <div className={`h-screen w-full flex items-center justify-center text-main`}>
            <div className={`bottom-20 relative space-y-8`}>
                <div className={`text-3xl text-main text-center`}>
                    <div>Oasis Care</div>
                    <div className={"text-xl font-light"}>L'acces aux soins ou que vous soyez</div>
                </div>
                <div className={`space-y-2`}>
                    <div className={"text-red-400"}>{message}</div>
                    <div>
                        <label htmlFor="login" className={`text-lg mb-2 block text-main`}>Login</label>
                        <input type="text" placeholder={`login`} className={`p-4 block py-1 border-2 w-96 rounded border-blue-900`} value={login} onChange={(e) => setLogin(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="login" className={`text-lg mb-2 block text-main`}>Mot de passe</label>
                        <div className={`relative flex items-center`}>
                            <input type={visible ? "text" : "password"} placeholder={`********`} className={`p-4 py-1 border-2 w-96 rounded border-blue-900`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <button onClick={() => setVisible(!visible)} className={`absolute right-3`}>
                                { !visible ? <span>a</span> : <span>b</span> }
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="select" className={`text-lg mb-2 block text-main`}>Vous êtes ?</label>
                        <div className={`relative flex items-center`}>
                            <select value={select} onChange={(e) => setSelect(e.target.value)} name="" id="select" className={`p-4 py-1 border-2 w-96 rounded border-blue-900`}>
                                <option value="medecin">Medecin</option>
                                <option value="patient">Patient</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`text-end`}>
                    <button onClick={() => onLogin() } className={`px-6 py-1 rounded bg-green-600 text-xl font-semibold text-white`}>Valider</button>
                </div>
            </div>
        </div>
    )
}