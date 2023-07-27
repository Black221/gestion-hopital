
export const Card = ({ img, title, data}) => {

    return (<>

        <div  className={"relative p-6"}>
            <div className={"absolute top-0 left-0 w-16 h-16 bg-white border overflow-hidden p-1 rounded-full flex items-center justify-center"}>
                <img src={img} className={"w-10"} alt=""/>
            </div>
            <div className={"border p-3 rounded-xl bg-gray-50"}>
                <h2 className={"text-center text-xl capitalize font-semibold"}>{title}</h2>
                <p className={"w-full flex py-3 items-center justify-around text-center text-gray-800"}>
                    {data}
                </p>
                {/*<ul className={"w-full flex py-3 items-center justify-around text-center text-gray-800"}>
                    {data ? data.mesure.map((d, index) => {
                        let className = data.length === 3 ? "w-1/3" : "w-1/2";

                        if (index === 0)
                            className += " border-r";
                        else if (index === data.mesure.length - 1)
                            className += " border-l";

                        return (
                            <li key={index} className={className}>
                                <p>{d.title}</p>
                                <p>{d.value}</p>
                            </li>
                        )
                    }) : "Informations  indisponible!!!"}
                </ul>*/}
                {data && data.advice && <p className={"text-sm text-gray-500 border-t pt-2"}>
                    {data.advice}
                </p>}
            </div>
        </div>
    </>)
}