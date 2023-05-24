import heart from "../../../assets/viHealth.jpeg";
import omron from "../../../assets/omron.png";
import veSync from "../../../assets/veSync.jpeg";
import {useState} from "react";


export const MeasurementInfo = ({data}) => {

    const [choice, setChoice] = useState("omronConnect");

    return (<>
        <div>
            <div className=" flex items-center py-5 justify-around  flex-wrap">

                <button className={`border-2 p-4 ${choice === "omronConnect" && "rounded border-blue-400"}`} onClick={() => setChoice("omronConnect")}>
                    <div className={"text-center"}>
                        <img src={omron} alt="" className={"w-20 h-20  inline"}/>
                        <h2 className="text-base text-center leading-7 text-gray-900">Omron connect</h2>
                    </div>
                </button>

                <button className={`border-2 p-4 ${choice === "viHealth" && "rounded border-blue-400"}`} onClick={() => setChoice("viHealth")}>
                    <div className={"text-center"}>
                        <img src={heart} alt="" className={"h-20   inline"}/>
                        <h2 className="text-base text-center leading-7 text-gray-900">ViHealth</h2>
                    </div>
                </button>

                <button className={`border-2 p-4 ${choice === "veSync" && "rounded border-blue-400"}`} onClick={() => setChoice("veSync")}>
                    <div className={"text-center"}>
                        <img src={veSync} alt="" className={"w-20 h-20   inline"}/>
                        <h2 className="text-base text-center leading-7 text-gray-900">VeSync</h2>
                    </div>
                </button>


            </div>

            <div className={"border p-4 w-10/12 mx-auto rounded-lg"}>
                {data[choice]}
            </div>
        </div>
    </>)
}