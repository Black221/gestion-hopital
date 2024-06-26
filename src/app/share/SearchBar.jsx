import {useEffect, useState} from "react";
import useDebounce from "../../hooks/useDebounce.js";


export const SearchBar = ({label, getSearch}) => {

    const [search, setSearch] = useState("");

    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        getSearch(debouncedSearch)
    }, [debouncedSearch, getSearch])
    
    return (<>
        <div className="p-2 flex items-center justify-between pb-4 bg-white ">
            <p className={`text-main font-semibold md:text-xl text-sm`}>
                {label}
            </p>
            <label htmlFor="table-search" className="sr-only">Rechercher...</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" id="table-search-users"
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg md:w-80 w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                       placeholder="Chercher..."/>
            </div>
        </div>
    </>)
}