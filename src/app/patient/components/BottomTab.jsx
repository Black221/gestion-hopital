import {NavLink} from "react-router-dom";

const BottomTab = () => {
    return (<>
        <div
            className="fixed z-50 md:w-full w-80 h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                <NavLink to={"/patient/"} data-tooltip-target="tooltip-home" type="button"
                         className={({isActive}) => {
                             return `inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group rounded-l-full ${isActive && "bg-green-50 is-active"}`
                         }}>
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-500 group-[.is-active]:text-green-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                    <span className="sr-only">Home</span>
                </NavLink>

                <NavLink to={"/patient/rendez-vous"}  data-tooltip-target="tooltip-wallet" type="button"
                         className={({isActive}) => {
                             return `inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group  ${isActive && "bg-green-50 is-active"}`
                         }}>
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500 group-hover:text-green-500 group-[.is-active]:text-green-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12ZM16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18Z"/>
                    </svg>
                        <span className="sr-only">Wallet</span>
                </NavLink>


                <NavLink to={"/patient/notifications"} data-tooltip-target="tooltip-settings" type="button"
                        className={({isActive}) => {
                            return `inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group rounded-r-full ${isActive && "bg-green-50 is-active"}`
                        }}>
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500  group-hover:text-green-500 group-[.is-active]:text-green-500 group"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20">
                            <g id="Dribbble-Light-Preview" transform="translate(-181.000000, -720.000000)" >
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M137.75,574 L129.25,574 L129.25,568 C129.25,565.334 131.375,564 133.498937,564 L133.501063,564 C135.625,564 137.75,565.334 137.75,568 L137.75,574 Z M134.5625,577 C134.5625,577.552 134.0865,578 133.5,578 C132.9135,578 132.4375,577.552 132.4375,577 L132.4375,576 L134.5625,576 L134.5625,577 Z M140.9375,574 C140.351,574 139.875,573.552 139.875,573 L139.875,568 C139.875,564.447 137.359,562.475 134.5625,562.079 L134.5625,561 C134.5625,560.448 134.0865,560 133.5,560 C132.9135,560 132.4375,560.448 132.4375,561 L132.4375,562.079 C129.641,562.475 127.125,564.447 127.125,568 L127.125,573 C127.125,573.552 126.649,574 126.0625,574 C125.476,574 125,574.448 125,575 C125,575.552 125.476,576 126.0625,576 L130.3125,576 L130.3125,577 C130.3125,578.657 131.739438,580 133.5,580 C135.260563,580 136.6875,578.657 136.6875,577 L136.6875,576 L140.9375,576 C141.524,576 142,575.552 142,575 C142,574.448 141.524,574 140.9375,574 L140.9375,574 Z" id="notification_bell-[#1397]">

                                    </path>
                                </g>
                            </g>
                    </svg>
                    <span className="sr-only">Settings</span>
                </NavLink>

            </div>
        </div>
    </>)
}

export default BottomTab;