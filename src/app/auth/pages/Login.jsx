import {InputForm} from "../components/InputForm.jsx";
import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import useAuth from "../../../hooks/useAuth.js";
import {Select} from "../../share/Select.jsx";


export const Login = () => {


    const LOGIN_REGEX = /(?=.*)/;
    const PASSWORD_REGEX = /(?=.*)/;

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [viewPassword, setViewPassword] = useState(false);
    const [role, setRole] = useState("Admin");

    const [loading, setLoading] = useState(false);

    const auth = useAuth();

    const navigate = useNavigate();
    //const from = useLocation().state?.from?.pathname || "/";


    const isValid = () => {
        return  LOGIN_REGEX.test(login) && login !== "" && PASSWORD_REGEX.test(password) && password !== "";
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        //login
        const data = {
            id: 1,
            login,
            role,
            token: "123456789",
        }
        auth.login(data)
        //navigate to admin page
        navigate("/")
    }


    return (<>
        <div className={`h-screen w-full flex items-center justify-center text-main`}>
            <form className={`bottom-20 relative space-y-8`} onSubmit={handleSubmit}>
                <div className={`md:text-3xl text-2xl text-main text-center`}>
                    <div>Espace de travail</div>
                    <div className={"text-sm my-4 text-red-500"}>
                        Ceci est une application test choisisez votre role et connectez-vous
                    </div>
                </div>
                <div className={`space-y-2 md:w-96 w-80 mx-auto`}>
                    <div className={"text-sm text-red-400 text-center"}>{errMessage}</div>

                    <InputForm className={""}
                               label={"login"}
                               type={"text"}
                               getValue={setLogin}
                               regex={LOGIN_REGEX}
                               required={false} />

                    <InputForm className={""}
                               label={"password"}
                               type={viewPassword ? "text" : "password"}
                               getValue={setPassword}
                               regex={PASSWORD_REGEX}
                               required={false} />

                    <Select label={"Role"} options={[
                        "Admin", "Medecin", "Assistant"
                    ]} value={role} setValue={setRole} />

                    <div className={"space-x-2 flex items-center justify-end"}>
                        <button className={""} type={"button"} onClick={() => setViewPassword(!viewPassword)}>
                            {viewPassword ? <FaEyeSlash /> : <FaEye /> }
                        </button>
                    </div>
                </div>
                {!loading ? <div className={"text-center"}>
                    <button type={"submit"}
                            className={`px-6 py-1 rounded ${"bg-green-500"} text-xl font-semibold text-white`}

                    >Login
                    </button>
                </div> : <div>
                    {/* load spinner */}

                    <div role="status">
                        <svg aria-hidden="true"
                             className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-600 mx-auto"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"/>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>

                </div>}
            </form>
        </div>
    </>)
}