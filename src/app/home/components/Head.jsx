import {useState} from "react";


const Head = () => {

    const [menu, setMenu] = useState(false)
    return (<>

        <div className="bg-white sticky top-0 z-50">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header className="flex items-center justify-between py-4">
                    {/* logo - start */}
                    <a href="/"
                       className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
                       aria-label="logo">

                        Oasis Care
                    </a>
                    {/* logo - end */}

                    {/* nav - start */}
                    <nav className="hidden gap-12 lg:flex">
                        <a href="#"
                           className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Accueil</a>
                        <button onClick={() => setMenu(!menu)}
                                className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500">
                            Services

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                        <a href="#"
                           className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
                        <a href="#"
                           className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">A propos</a>
                    </nav>
                    {/* nav - end */}

                    {/* buttons - start */}
                    <div
                        className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">


                        <a href="/login"
                           className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                            Espace membres</a>
                    </div>

                    <button type="button"
                            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"/>
                        </svg>

                        Menu
                    </button>
                    {/* buttons - end */}
                </header>

                {/* menu - start */}
                {menu &&<div className={"relative bg-red-200 w-full"}>
                    <Menu />
                </div>}
                {/* menu - end */}
            </div>
        </div>
    </>)
}


const Menu = () => {

    return (<>
        <div
            className="absolute mx-auto -mt-4 hidden w-full max-w-screen-sm overflow-hidden rounded-lg border bg-white shadow-sm lg:block">
            <div className="m-6 mb-10 grid grid-cols-2 gap-8">
                {/* link - start */}
                <a href="#" className="group flex gap-4">
                    <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                    </div>

                    <div>
                        <div className="mb-1 font-semibold">Growth</div>
                        <p className="text-sm text-gray-500">This is a section of some simple filler text,
                            also known as placeholder text.</p>
                    </div>
                </a>
                {/* link - end */}

                {/* link - start */}
                <a href="#" className="group flex gap-4">
                    <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                    </div>

                    <div>
                        <div className="mb-1 font-semibold">Security</div>
                        <p className="text-sm text-gray-500">This is a section of some simple filler text,
                            also known as placeholder text.</p>
                    </div>
                </a>
                {/* link - end */}

                {/* link - start */}
                <a href="#" className="group flex gap-4">
                    <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                        </svg>
                    </div>

                    <div>
                        <div className="mb-1 font-semibold">Cloud</div>
                        <p className="text-sm text-gray-500">This is a section of some simple filler text,
                            also known as placeholder text.</p>
                    </div>
                </a>
                {/* link - end */}

                {/* link - start */}
                <a href="#" className="group flex gap-4">
                    <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                        </svg>
                    </div>

                    <div>
                        <div className="mb-1 font-semibold">Analytics</div>
                        <p className="text-sm text-gray-500">This is a section of some simple filler text,
                            also known as placeholder text.</p>
                    </div>
                </a>
                {/* link - end */}
            </div>

            {/* link - start */}
            <a href="#"
               className="block bg-gray-50 p-4 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                <div className="mb-1 flex items-center gap-1.5">
                    <span className="font-semibold leading-none">Enterprise solutions</span>
                    <span
                        className="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">New</span>
                </div>

                <p className="text-sm text-gray-500">This is a section of some simple filler text.</p>
            </a>
            {/* link - end */}
        </div>
    </>)
}

export default Head;
