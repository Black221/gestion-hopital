import heart from "../../assets/viHealth.jpeg";
import omron from "../../assets/omron.png";
import veSync from "../../assets/veSync.jpeg";
import {useState} from "react";


export const MeasurementInfo = ({data}) => {

    const [choice, setChoice] = useState("temperature");

    return (<>
        <div>
            <div className={"w-11/12 mx-auto rounded-lg mb-4"}>
                <h3 className={"text-md font-semibold"}>Etat général</h3>
                <p className={"border text-sm p-4  mx-auto rounded-lg"}>{data.healthCondition}</p>
            </div>

            <div className=" flex items-center py-5 justify-around  flex-wrap">

                <button className={`border-2 p-4 ${choice === "temperature" && "rounded border-blue-400"}`} onClick={() => setChoice("temperature")}>
                    <div className={"text-center"}>
                        <img src={omron} alt="" className={"w-20 h-20  inline"}/>
                        <h2 className="text-base text-center leading-7 text-gray-900">Omron connect</h2>
                    </div>
                </button>

                <button className={`border-2 p-4 ${choice === "tension" && "rounded border-blue-400"}`} onClick={() => setChoice("tension")}>
                    <div className={"text-center"}>
                        <img src={heart} alt="" className={"h-20   inline"}/>
                        <h2 className="text-base text-center leading-7 text-gray-900">ViHealth</h2>
                    </div>
                </button>

                <button className={`border-2 p-4 ${choice === "weight" && "rounded border-blue-400"}`} onClick={() => setChoice("weight")}>
                    <div className={"text-center"}>
                        <img src={veSync} alt="" className={"w-20 h-20   inline"}/>
                        <h2 className="text-base text-center leading-7 text-gray-900">VeSync</h2>
                    </div>
                </button>

            </div>

            <div className={"border p-4 w-10/12 mx-auto rounded-lg "}>
                {data[choice]}
            </div>

        </div>
    </>)
}