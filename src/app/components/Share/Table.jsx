import {NavLink} from "react-router-dom";

export const Table = ({column, data, action}) => {

    return (<>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">

                <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        {column && column.map((c, index) => (
                            <th key={index} scope="col" className="px-3 py-3">
                                {c}
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
                                    <NavLink to={`/${action.position}/${a}/${d.id}`}>{a}</NavLink>
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


