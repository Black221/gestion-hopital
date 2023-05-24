
import weight from  "../../../assets/omron.png";
import heart from  "../../../assets/viHealth.jpeg";
import temperature from  "../../../assets/veSync.jpeg";
import {useEffect, useState} from "react";
import {CountDown} from "../Share/CountDown.jsx";
import {useAppStateContext} from "../../context/AppContext.jsx";

export const Measurement = ({validate, save, isSaved}) => {

    const [canStart, setCanStart] = useState(false);
    const [viHealth, setViHealth] = useState(false);
    const [omron, setOmron] = useState(false);
    const [vesycn, setVeSync] = useState(false);

    const {patients, setPatients} = useAppStateContext();

    useEffect(() => {

        if (viHealth && omron && vesycn)
            validate(true)

        console.log(viHealth && omron && vesycn)
    }, [viHealth, omron, vesycn])

    useEffect(() => {
        if (save)
            isSaved(true)
    }, [save])

    return(<>

        <div className={`border px-4 pb-4 rounded-xl`}>

            <h2 className="text-xl font-bold py-5 text-center leading-7 text-gray-900">Appareils</h2>
            <hr/>
            <div className=" flex items-center space-x-6 py-5 justify-around max-w-[360px] flex-wrap">

                <div>
                    <input type="checkbox" id="masse" value="" className="hidden peer" required=""/>
                    <label htmlFor="masse" className="inline-flex items-center justify-between  p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400">
                        <div  className={"text-center relative"}>
                            <img src={weight} alt="" className={"w-20 h-20  inline"}/>
                            <h2 className="text-base text-center leading-7 text-gray-900">omron connect</h2>
                            <p>
                                <CountDown count={5} value={setOmron} start={canStart} />
                            </p>

                        </div>
                    </label>
                </div>

                <div>
                    <input type="checkbox" id="ar" value="" className="hidden peer" required=""/>
                    <label htmlFor="ar" className="inline-flex items-center justify-between  p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400">

                        <div className={"text-center relative"}>
                            <img src={heart} alt="" className={"h-20   inline"}/>
                            <h2 className="text-base text-center leading-7 text-gray-900">ViHealth</h2>
                            <p>
                                <CountDown count={5} value={setViHealth} start={canStart} />

                            </p>
                        </div>
                    </label>
                </div>


            </div>

            <div className=" flex items-center space-x-6 py-5 justify-around max-w-[360px] flex-wrap">

               <div>
                   <input type="checkbox" id="tmp" value="" className="hidden peer" required=""/>
                   <label htmlFor="tmp" className="inline-flex items-center justify-between  p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400">
                       <div className={"text-center relative"}>
                           <img src={temperature} alt="" className={"w-20 h-20   inline"}/>
                           <h2 className="text-base text-center leading-7 text-gray-900">VeSync</h2>
                           <p>
                               <CountDown count={5} value={setVeSync} start={canStart} />

                           </p>
                       </div>
                   </label>
               </div>

{/*
                <div>
                    <input type="checkbox" id="oxy" value="" className="hidden peer" required=""/>
                    <label htmlFor="oxy" className="inline-flex items-center justify-between  p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400">

                        <div className={"text-center relative"}>
                            <img src={oxygene} alt="" className={"w-20 h-20   inline"}/>
                            <h2 className="text-base text-center leading-7 text-gray-900">Taux oxygène</h2>
                            <p></p>
                        </div>
                    </label>
                </div>
*/}
            </div>

            <div className={""}>
                <button
                    onClick={() => {
                        setCanStart(true);
                    }}
                    type="submit"
                    className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    Récupérer
                </button>
            </div>
        </div>

    </>)
}