import {InputForm} from "../components/InputForm.jsx";
import {useRef, useState} from "react";
import axios from "../../../api/Axio.js";
import {Link} from "react-router-dom";
import useAuth from "../../../hooks/useAuth.js";
import {FaEye, FaEyeSlash} from "react-icons/fa6";


export const Register = () => {

    const { auth } = useAuth();

    const LOGIN_REGEX = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
    const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,32}$/;

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [viewPassword, setViewPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errMessage, setErrMessage] = useState("");


    const isValid = () => {
        return LOGIN_REGEX.test(firstname) && LOGIN_REGEX.test(lastname) && LOGIN_REGEX.test(login) && PASSWORD_REGEX.test(password);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isValid()) {
            setErrMessage("Invalid ...")
            return null;
        }

        setLoading(true);

        const response = axios.post(
            "auth/register",
            JSON.stringify({login, firstname, lastname, password}),
            { headers : {'Content-Type' : 'application/json'}}
        );

        response.then((res) => {
            setLoading(false)
            //auth.login(res.data)
            console.log(res.data)

        }).catch(err => {
            setLoading(false)
            if (!err?.response)
                setErrMessage("No server Response")
            console.log(err.response.data)
            if (err?.response?.data?.message?.search("user.user_login_unique") >= 0)
                setErrMessage("Ce login existe déjà!")
            else
                setErrMessage("Une erreur c'est produite! Veuillez réessayer.")

        })
    }

    return (<>
        <div className={`h-screen w-full flex items-center justify-center text-main`}>
            <form className={`bottom-20 relative space-y-8`} onSubmit={handleSubmit}>
                <div className={`text-3xl text-main text-center`}>
                    <div>Oasis Care</div>
                    <div className={"text-xl font-light"}> L&apos;accés aux soins ou que vous soyez</div>
                    <div className={"text-sm text-red-500"}>
                        {errMessage}
                    </div>
                </div>
                <div className={`space-y-2 w-96`}>
                    <InputForm className={""}
                               label={"firstname"}
                               type={"text"}
                               getValue={setFirstname}
                               regex={LOGIN_REGEX}
                               required={true} />

                    <InputForm className={""}
                               label={"lastname"}
                               type={"text"}
                               getValue={setLastname}
                               regex={LOGIN_REGEX}
                               required={true} />

                    <InputForm className={""}
                               label={"login"}
                               type={"email"}
                               getValue={setLogin}
                               regex={LOGIN_REGEX}
                               required={true} />

                    <InputForm className={""}
                               label={"password"}
                               type={viewPassword ? "text" : "password"}
                               getValue={setPassword}
                               regex={PASSWORD_REGEX}
                               required={true} />

                    <div className={"text-end"}>
                        <button type={"button"} onClick={() => setViewPassword(!viewPassword)}>
                            {viewPassword ? <FaEyeSlash /> : <FaEye /> }
                        </button>
                    </div>
                </div>
                {!loading ? <div className={"text-center"}>
                    <button type={"submit"} disabled={!isValid()}
                            className={`px-6 py-1 rounded ${isValid() ? "bg-green-500" : "bg-gray-400"} text-xl font-semibold text-white`}

                    >Confirmer
                    </button>
                </div> : "loading..."}

                <div>
                    <Link to={"/login"}>Se connecter.</Link>
                </div>
            </form>
        </div>
    </>)
}