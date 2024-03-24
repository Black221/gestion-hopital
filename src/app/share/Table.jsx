import {useEffect, useState} from "react";
import useConvertToFrench from "../../hooks/useConvertToFrench.js";

export const Table = ({column, data, action}) => {

    const [sens, setSens] = useState(false);
    const [current, setCurrent] = useState("");
    const [render, setRender] = useState(data);
    const [convert] = useConvertToFrench();

    const sortTable = (column) => {
        let s = sens;
        if (current === column)
            s = !s
        else s = true;

        let nd = data
        if (s) {
            nd.sort((a, b) => {
                if (a[column] < b[column]) return -1;
                if (a[column] > b[column]) return 1;
                return 0;
            })
        } else {
            nd.sort((a, b) => {
                if (a[column] > b[column]) return -1;
                if (a[column] < b[column]) return 1;
                return 0;
            })
        }

        setRender(nd)
        setSens(s)
        setCurrent(column)
    }

    useEffect(() => {
        console.log(sens)
    }, [sens])

    return (<>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">

                <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        {column && column.map((c, index) => (
                            <th key={index} scope="col" className="px-3 py-3">
                                <button className={"uppercase"} onClick={() => sortTable(c)}>{convert(c)}</button>
                            </th>
                        ))}
                        <th colSpan={action.length} scope="col" className="px-3 py-3 border-l">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {render ? render.map((d, index) => (
                        <tr key={index} className="bg-white border-b">
                            {column && column.map((c, index) => (
                                <th key={index} scope="col" className="px-3 py-3">
                                    {d[c]}
                                </th>
                            ))}
                            {action && action.map((a, index) => (
                                <th key={index} scope="col" className="px-3 py-3 w-fit text-light text-blue-400 border-l underline">
                                    <button onClick={() => a.onClick(d)}>{a.label}</button>
                                </th>
                            ))}
                        </tr>
                    )) : <div>
                        none
                    </div>}
                </tbody>
            </table>
        </div>
    </>)
}


