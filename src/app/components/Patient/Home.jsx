import {Cover} from "./Cover.jsx";
import {useEffect, useState} from "react";
import moment from "moment";
import {Card} from "../Share/Card.jsx";
import {Heading} from "../Share/Heading.jsx";


import heart from "../../../assets/heart.jpg"
import temp from "../../../assets/oxygene.png"
import weight from "../../../assets/weight.svg"
import {Calendar} from "../Share/Calendar.jsx";
import {MESURE} from "../../dummy.js";
import {NavLink} from "react-router-dom";

export const Home = () => {

    const today = moment()
    const [currentDate, setCurrentDate] = useState(today);
    const [onChangeDate, setOnChangeDate] = useState(false);

    const [mesures, setMesures] = useState(MESURE.filter(({date}) => date === today.format("D/M/YYYY"))[0]);

    const img = [
        heart,
        temp,
        weight
    ];


    function setDate (date) {
        setCurrentDate(moment(date, "D/M/YYYY"))
    }

    useEffect(() => {
        setMesures(MESURE.filter(({date}) => date === currentDate.format("D/M/YYYY"))[0])
    }, [currentDate])

    return(<>

        <div className={"h-[calc(100vh-5rem)] overflow-y-auto "}>

            <Cover date={currentDate} data={null} onChangeDate={setOnChangeDate} />

            <div className="relative -top-6 drop- h-24 bg-white rounded-t-2xl">
                <div className="relative h-24 min-h-full ">

                    <div className={"pt-4"}>

                        <Heading title={"Some information"} text={"some text to describe something for you!!!"} width={""} subtitle={mesures && mesures.date} position={""} />
                    </div>

                    <div className={"p-4 space-y-10"}>
                        {mesures ? mesures.data.map((m, index) => (

                            <Card key={index} img={img[index]} title={"Some information"} data={m} />
                        )): <div className={"text-center"}>
                            No data to render!
                        </div>}

                    </div>

                </div>
            </div>
        </div>

        {onChangeDate && <div className={"absolute top-0 bottom-0 left-0 right-0 bg-gray-500 bg-opacity-20 flex justify-center pt-20"}>

            <div className={"rounded-xl text-center space-y-4 pt-10"}>

                <Calendar getDate={setDate} dateToColor={MESURE.map(({date}) => date)}/>

                <button onClick={() => {
                    setOnChangeDate(false)
                }} className={"bg-green-500 px-4 py-1 text-lg rounded-xl text-white font-semibold mx-auto"}>Confirmer
                </button>
            </div>
        </div>}

        <div className={"absolute bottom-10 right-10"}>
            <NavLink to={"/patient/rendez-vous"} className={"py-2 px-3 bg-green-500 rounded-xl text-white font-semibold text-sm"}>Prendre rendez-vous</NavLink>
        </div>

    </>)
}