import {Heading} from "../../share/Heading.jsx";
import {Breadcrumb} from "../../share/Breadcrumb.jsx";


const Index = () => {

    return (<>

        <Breadcrumb link={["medecin"]} />

        <div className={"flex flex-col items-center justify-center mt-40"}>

            <Heading text={`
                This is the text lorem input sit amen dolor
            `} title={`
                This is a Title
            `} position={"center"} />

            <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">

                <a href="#"
                   className="inline-block rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base">
                    Start Consulting</a>
            </div>
        </div>
    </>)
}

export default Index;