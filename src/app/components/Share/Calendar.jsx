import moment from 'moment';
import {useEffect, useState} from "react";

export const Calendar = ({getDate, selectedDays}) => {

    const [dateObject, setDateObject] = useState(moment());
    const [rows, setRows] = useState([]);

    const today = moment().date();
    const [dayToRender, setDayToRender] = useState(null);
    const [monthToRender, setMonthToRender] = useState(moment().month());
    const [yearToRender, setYearToRender] = useState(moment().year());

    const weekDayShortName = moment.weekdaysShort().map(day => {
        return (
            <th key={day}>
                <div className="w-full flex justify-center">
                    <p className="text-base font-medium text-center text-gray-800 ">{day}</p>
                </div>
            </th>
        );
    });

    const firstDayOfMonth = () => {
        return moment(dateObject)
            .startOf("month")
            .format("d");
    };

    const getBlank = () => {
        let blanks = [];
        for (let i = 0; i < firstDayOfMonth(); i++) {
            blanks.push(
                <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                </td>
            );
        }
        return blanks;
    }

    const getDayInMonth = () => {
        let daysInMonth = [];
        for (let d = 1; d <= dateObject.daysInMonth(); d++) {
            console.log(d, today)
            daysInMonth.push(
                <td key={d} className="pt-2">
                    <div className={`px-2 py-2 cursor-pointer flex w-full justify-center rounded-full ${ d=== today ? "bg-blue-400 text-white" : "text-gray-500"} `}>
                        <p className={`text-base   font-medium`}>{d}</p>
                    </div>
                </td>
            );
        }
        return daysInMonth;
    }

    const getRows = () => {
        let c = [];
        let r = [];
        let array = [...getBlank(), ...getDayInMonth()];
        array.forEach((row, i) => {
            if (i % 7 !== 0) {
                c.push(row); // if index not equal 7 that means not go to next week
            } else {
                r.push(c); // when reach next week we contain all td in last week to rows
                c = []; // empty container
                c.push(row); // in current loop we still push current row to new container
            }
            if (i === array.length - 1) { // when end loop we add remain date
                r.push(c);
            }
        });

        return r;
    }

    useEffect(() => {
        setRows(getRows())
    }, [])


    return (<>
        <div className=" p-6  bg-white rounded-t w-96">
            <div className={"text-xl font-semibold flex items-center justify-center"}>
                <button aria-label="calendar backward"
                        className="focus:text-gray-400 mr-3 hover:text-gray-400 text-gray-800 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left"
                         width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="15 6 9 12 15 18"/>
                    </svg>
                </button>
                {yearToRender}
                <button aria-label="calendar forward"
                        className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right"
                         width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="9 6 15 12 9 18"/>
                    </svg>
                </button>
            </div>
            <div className="px-4 flex items-center justify-between">
                <span tabIndex="0" className="focus:outline-none  text-base font-bold  text-gray-800">{moment.monthsShort(monthToRender)}</span>
                <div className="flex items-center">
                    <button aria-label="calendar backward"
                            className="focus:text-gray-400 hover:text-gray-400 text-gray-800 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="15 6 9 12 15 18"/>
                        </svg>
                    </button>
                    <button aria-label="calendar forward"
                            className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="9 6 15 12 9 18"/>
                        </svg>
                    </button>

                </div>
            </div>
            <div className="flex items-center justify-between mt-6 border rounded-lg p-4 overflow-x-auto bg-white shadow">
                <table className="w-full ">
                    <thead>
                        <tr>
                            {weekDayShortName}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((d, i) => {
                            return <tr key={i}>{d}</tr>;
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}