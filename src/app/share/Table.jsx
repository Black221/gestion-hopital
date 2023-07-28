import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import useConvertToFrench from "../../hooks/useConvertToFrench.js";

export const Table = ({column, data, action}) => {

    const [sens, setSens] = useState(false);
    const [current, setCurrent] = useState("patientId");
    const [convert] = useConvertToFrench();

    const sortTable = (column) => {
        let s = sens;
        if (current === column)
            s = !s
        else s = true;
        console.log(s, sens)

        let nd = data.sort((a, b) => {
            if (a[column] > b[column])
                return s ? 1 : -1;
            else
                return s ? -1 : 1;
        })
        setSens(sens)
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
                        <th colSpan={action.ref.length} scope="col" className="px-3 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data ? data.map((d, index) => (
                        <tr key={index} className="bg-white border-b">
                            {column && column.map((c, index) => (
                                <th key={index} scope="col" className="px-3 py-3">
                                    {d[c]}
                                </th>
                            ))}
                            {action && action.ref.map((a, index) => (
                                <th key={index} scope="col" className="px-3 py-3 text-light text-blue-400 border-l underline">
                                    <NavLink to={`/${action.position}/${a}/${d[action.id]}`}>{a}</NavLink>
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


