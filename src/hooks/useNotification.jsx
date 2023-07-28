import {useState} from "react";


const UseNotification = () => {

    const [response, setResponse] = useState(null);
    const [show, setShow] = useState(false);

    const Notification = ({message = {title: "hey", text: ""}, actions = ["annuler"]}) => {

        if (show)
            return (<>
                <div className={"absolute z-[100] left-0 top-0 right-0 bottom-0 bg-gray-600 bg-opacity-20 flex items-center justify-center"}>
                    <div className={" mx-auto w-80 p-4 space-y-4 bg-white rounded"}>
                        <h2 className={"text-center text-xl font-bold text-green-500"}>{message.title}</h2>
                        <p className={"text-center"}>{message.text}</p>
                        <div className={"flex justify-around"}>
                            {actions.map(
                                (a, index) => (<button key={index} onClick={() => {
                                    setResponse(a)
                                    setShow(false)
                                }} className={"font-semibold bg-gray-100 rounded p-3 py-1 hover:bg-green-500 hover:text-white"}>
                                    {a}
                                </button>)
                            )}
                        </div>
                    </div>
                </div>
            </>)
        return (<></>)
    }

    return [response, setShow, Notification];
}

export default UseNotification