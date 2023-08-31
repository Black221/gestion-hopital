import {useEffect, useState} from "react";

import weightImg from "../../../assets/omron.png";
import heartImg from "../../../assets/viHealth.jpeg";
import temperatureImg from "../../../assets/veSync.jpeg";
import {CountDown} from "../../share/CountDown.jsx";

export const Measurement = ({getMeasure}) => {

    const [canStart, setCanStart] = useState(false);
    const [weight, setWeight] = useState("64kg");
    const [activeWeight, setActiveWeight] = useState(false);
    const [temperature, setTemperature] = useState("36.7°C");
    const [activeTemperature, setActiveTemperature] = useState(false);
    const [tension, setTension] = useState("129/84 mmHg");
    const [activeTension, setActiveTension] = useState(false);


    useEffect(() => {
        getMeasure({
            weight,
            temperature,
            tension
        })
    }, [getMeasure, temperature, tension, weight])

    return(<>

        <div className={`border px-4 pb-4 rounded-xl`}>

            <h2 className="text-xl font-bold py-5 text-center leading-7 text-gray-900">Appareils</h2>
            <hr/>
            <div className=" flex items-center space-x-6 py-5 justify-around max-w-[360px] flex-wrap">

                <div>
                    <input type="checkbox" id="masse" checked={activeWeight} onChange={e => setActiveWeight(e.target.checked)} className="hidden peer" required=""/>
                    <label htmlFor="masse" className="inline-flex items-center justify-between  p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400">
                        <div  className={"text-center relative"}>
                            <img src={weightImg} alt="" className={"w-20 h-20  inline"}/>
                            <h2 className="text-base text-center leading-7 text-gray-900">omron connect</h2>

                        </div>
                    </label>
                </div>

                <div>
                    <input type="checkbox" id="ar" checked={activeTension} onChange={e => setActiveTension(e.target.checked)} className="hidden peer" required=""/>
                    <label htmlFor="ar" className="inline-flex items-center justify-between  p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400">

                        <div className={"text-center relative"}>
                            <img src={heartImg} alt="" className={"h-20   inline"}/>
                            <h2 className="text-base text-center leading-7 text-gray-900">ViHealth</h2>

                        </div>
                    </label>
                </div>


            </div>

            <div className=" flex items-center space-x-6 py-5 justify-around max-w-[360px] flex-wrap">

               <div>
                   <input type="checkbox" id="tmp" checked={activeTemperature} onChange={e => setActiveTemperature(e.target.checked)} className="hidden peer" required=""/>
                   <label htmlFor="tmp" className="inline-flex items-center justify-between  p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400">
                       <div className={"text-center relative"}>
                           <img src={temperatureImg} alt="" className={"w-20 h-20   inline"}/>
                           <h2 className="text-base text-center leading-7 text-gray-900">VeSync</h2>

                       </div>
                   </label>
               </div>
            </div>

            <div className={"flex  justify-between items-center"}>
                <button
                    onClick={() => {
                        setCanStart(true);
                    }}
                    type="button"
                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    Récupérer
                </button>
                <CountDown count={10} start={canStart} />
            </div>
        </div>

    </>)
}