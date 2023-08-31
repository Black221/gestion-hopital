import {useEffect, useState} from "react";


export const DailyDisplay = ({data, getAvailabilities}) => {

    const [availabilities, setAvailabilities] = useState(data);

    useEffect(() => {
        getAvailabilities(availabilities)
    }, [availabilities, getAvailabilities])


    useEffect(() => {
        setAvailabilities(data)
    }, [data])

    return (<>

        <div className={`px-2 max-h-[480px] overflow-y-auto py-4`}>
            <div className={`flex justify-between`}>
                <div className={"flex items-center space-x-4 font-semibold"}>
                    <p>Heure</p>
                    <h3>Tache</h3>

                </div>
                <p className={"font-semibold"}>Disponiblité</p>

            </div>
            <ol className="relative border-l border-gray-200 mt-4">
                {Array.from (Array(13), ((e, index) => (
                    <li key={index} className=" ml-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                        <div className={`flex items-center mb-2`}>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                                {index + 8} h
                            </time>
                            <hr className={'flex-1 mx-4'}/>
                            <div className={"flex  h-8  rounded-lg space-x-4"}>
                                <button onClick={() => {
                                    if (!availabilities.includes(index + 8)) {
                                        setAvailabilities(prev => [...prev, index + 8]);
                                    }
                                }} type={"button"} className={`w-8 h-8 ${availabilities && availabilities.includes(index + 8) ? "bg-green-400" : "bg-green-100"}`}></button>
                                <button onClick={() => {
                                    if (availabilities.includes(index + 8)) {
                                        setAvailabilities(prev => [...prev.filter(item => item !== index+8)]);
                                    }
                                }} type={"button"} className={`w-8 h-8 ${!availabilities || !availabilities.includes(index + 8) ? "bg-red-400" : "bg-red-100"}`}></button>
                            </div>
                        </div>

                    </li>
                )))}

            </ol>
        </div>
    </>)
}