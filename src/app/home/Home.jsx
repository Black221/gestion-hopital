import Head from "./components/Head.jsx";
import Cover from "./components/Cover.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import Presentation from "./components/Presentation.jsx";
import Newsletter from "./components/Newsletter.jsx";


export const Home = () => {



    return (<>

        <Banner />

        <Head />

        <div className={"w-10/12 mx-auto space-y-32"}>

            <Cover />

            <Presentation />

            <Services />

            <Pricing />

            <Newsletter />

        </div>

        <Footer />

    </>)
}

