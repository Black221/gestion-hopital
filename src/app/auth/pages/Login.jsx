import {InputForm} from "../components/InputForm.jsx";
import {useEffect, useState} from "react";
import axios from "../../../api/jsonPH.js";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth.js";
import useAxiosFunction from "../../../hooks/useAxiosFunction.js";


export const Login = () => {

    const auth = useAuth();
    const [response, error, loading, axiosFetch] = useAxiosFunction()

    const LOGIN_REGEX = /(?=.*)/;
    const PASSWORD_REGEX = /(?=.*)/;

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [viewPassword, setViewPassword] = useState(false);


    const navigate = useNavigate();
    const from = useLocation().state?.from?.pathname || "/";


    const isValid = () => {
        return  LOGIN_REGEX.test(login) && login !== "" && PASSWORD_REGEX.test(password) && password !== "";
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isValid()) {
            setErrMessage("Invalid ...")
            return null;
        }

        await axiosFetch({
            axiosInstance: axios,
            method: 'POST',
            url: 'auth/authenticate',
            requestConfig: [
                JSON.stringify({login, password}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                }
            ]
        })
    }
    
    useEffect(() => {
        if (response !== null) {
            auth.login(response)
            if (response.role === "DOCTOR") {

                if (from.search("medecin") > 0)
                    navigate(from, {replace: true})
                else
                    navigate("/medecin", {replace: true})

            }else if (response.role === "PATIENT") {

                if (from.search("patient") > 0)
                    navigate(from, {replace: true})
                else
                    navigate("/patient", {replace: true})

            }else if (response.role === "ADMIN" > 0) {

                if (from.search("office"))
                    navigate(from, {replace: true})
                else
                    navigate("/office", {replace: true})

            }else
                setErrMessage("Une erreur est survenue! Veuillez reessayer.")
        }
        // eslint-disable-next-line
    },[response])

    useEffect(() => {
        console.log(error)
        if (error) {
            console.log(error)
            setErrMessage("Login or password not valid!!!")
        } else {
            setErrMessage("")
        }
    }, [error])

    return (<>
        <div className={`h-screen w-full flex items-center justify-center text-main`}>
            <form className={`bottom-20 relative space-y-8`} onSubmit={handleSubmit}>
                <div className={`md:text-3xl text-2xl text-main text-center`}>
                    <div>Oasis Care</div>
                    <div className={"md:text-xl text-sm font-light"}> L&apos;accés aux soins ou que vous soyez!</div>
                </div>
                <div className={`space-y-2 md:w-96 w-80`}>
                    <div className={"text-sm text-red-400 text-center"}>{errMessage}</div>

                    <InputForm className={""}
                               label={"login"}
                               type={"text"}
                               getValue={setLogin}
                               regex={LOGIN_REGEX}
                               required={true} />

                    <InputForm className={""}
                               label={"password"}
                               type={viewPassword ? "text" : "password"}
                               getValue={setPassword}
                               regex={PASSWORD_REGEX}
                               required={true} />

                    <div className={"space-x-2 flex items-center justify-end"}>
                        <button className={""} type={"button"} onClick={() => setViewPassword(!viewPassword)}>
                            {viewPassword ? <FaEyeSlash /> : <FaEye /> }
                        </button>
                        <span>Forgot password ?</span>
                    </div>
                </div>
                {!loading ? <div className={"text-center"}>
                    <button type={"submit"} disabled={!isValid()}
                            className={`px-6 py-1 rounded ${isValid() ? "bg-green-500" : "bg-gray-400"} text-xl font-semibold text-white`}

                    >Login
                    </button>
                </div> : "loading..."}
                <div>
                    <Link to={"/register"}> register now! </Link>
                </div>
            </form>

        </div>
    </>)
}