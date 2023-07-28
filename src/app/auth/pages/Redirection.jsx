import {Heading} from "../../share/Heading.jsx";


const Redirection = () => {


    return (<>
        <div className={"mt-40 flex flex-col items-center justify-center"}>
            <Heading title={"Inscription réussi"} subtitle={"validation"} text={`
            Votre demande est en cours de traitement.
            Consulter régulierement votre boite mail.
            `} position={"center"} width={"md"} />
            <div className={"font-semibold"}>
                Aller à la page <a href="/" className={"text-blue-500"}>d'accueil </a>
                ou <a href="/login" className={"text-blue-500"}> se connecter</a>
            </div>
        </div>

    </>)
}


export default Redirection;