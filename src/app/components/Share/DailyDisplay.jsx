

export const DailyDisplay = () => {

    return (<>

        <div className={`px-2 max-h-[480px] overflow-y-auto py-4`}>
            <div className={`flex justify-between`}>
                <div className={"flex items-center space-x-4 font-semibold"}>
                    <p>Heure</p>
                    <h3>Tache</h3>

                </div>
                <p className={"font-semibold"}>Disponiblité</p>

            </div>
            <ol className="relative border-l border-gray-200">
                {Array.from (Array(13), ((e, index) => (
                    <li key={index} className=" ml-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                        <div className={`flex items-center`}>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                                {index + 8} h
                            </time>
                            <hr className={'flex-1 ml-4'}/>
                        </div>
                        <div className={"flex w-full h-8  rounded-lg space-x-4"}>
                            <input className={"flex-1"} type="text"/>
                            <button className={"w-8 h-8 bg-green-100"}></button>
                            <button className={"w-8 h-8 bg-red-100"}></button>
                        </div>
                    </li>
                )))}

            </ol>
        </div>
    </>)
}