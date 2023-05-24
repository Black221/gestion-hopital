import {useState} from "react";


export const Pagination = ({page, length, dataCount}) => {
    
    const [nbToRender, setNbToRender] = useState(10);
    const [pageList, setPageList] = useState(5);
    const setPage = (p) => {

    }

    return(<>
        <nav className="w-full flex items-center justify-between py-4" aria-label="Table navigation ">
                    <span className="text-sm font-normal text-gray-500  min-w-fit">liste <span
                        className="font-semibold text-gray-900">{page * nbToRender + 1}-{(page + 1) <= length / nbToRender ? (page + 1) * nbToRender : length}</span> sur <span
                        className="font-semibold text-gray-900 ">{length}</span></span>
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <button onClick={() => {if (page > 0) setPage((p) => (p - 1))}}
                            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                        <span className="sr-only">Previous</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </li>
                <li ><button onClick={() => {
                    setPage(0)
                }} className={ `px-3 py-2 leading-tight border ${page !== 0 ? " text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700" : "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"}`}>
                    {1}
                </button></li>
                {page > (pageList - 1) / 2 + 1 && <li>
                    <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">...</button>
                </li>}
                {  Array.from (Array(pageList), ((e, index) => {
                    if (index + page - (pageList - 1) / 2 > 0 && index + page - (pageList - 1) / 2 < Math.floor(dataCount / nbToRender) - 1)
                        return (
                            <li key={index}>
                                <button onClick={() => {
                                    if (page !== index + page - (pageList - 1) / 2)
                                        setPage(index + page - (pageList - 1) / 2)
                                }} className={ `px-3 py-2 leading-tight border ${page !== index + page - (pageList - 1) / 2 ? " text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700" : "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"}`}>
                                    {index + 1 - (pageList - 1) / 2 + page}</button>
                            </li>
                        );
                    return <span key={index}></span>;
                }))}
                {page < Math.floor(dataCount / nbToRender) - (pageList - 1) / 2 - 1 && <li>
                    <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</button>
                </li>}
                {Math.floor(dataCount / nbToRender) > 0 &&<li>
                    <button onClick={() => {
                        setPage(Math.floor(dataCount / nbToRender) - 1)
                    }}
                            className={`px-3 py-2 leading-tight border ${page !== Math.floor(dataCount / nbToRender) - 1 ? " text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700" : "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"}`}>
                        {Math.floor(dataCount / nbToRender)}
                    </button>
                </li>}
                <li>
                    <button onClick={() => {if (page < Math.floor(dataCount / nbToRender) ) setPage((p) => (p + 1))}}
                            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                        <span className="sr-only">Next</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    </>)
}