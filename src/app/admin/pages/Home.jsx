
import socketIo from "../../../api/socketIo.js";
import {useEffect} from "react";

const Home = () => {



    useEffect(() => {

        function onConnect () {
            console.log("connected")

        }
        socketIo.on("connected", onConnect)

        function onDisconnect () {
            console.log("disconnected")
        }
        socketIo.on("disconnected", onDisconnect)

        socketIo.on("lhacksrt", (data) => {
            console.log(data)
        })

        return () => {
            socketIo.off("connect", onConnect)
            socketIo.off("lhacksrt")
            socketIo.off("disconnect", onDisconnect)
        }
    }, [])

    const connectToSocket = () => {
        socketIo.connect()
    }

    const disconnectToSocket = () => {
        socketIo.disconnect()
    }

    const send = () => {
        socketIo.emitWithAck("sendDataToDoctor", {
            to: "lhacksrt",
            from: "bouna",
            measure: {
                weight: "",
                tension: "",
                temperature: ""
            }
        }).then(r => {
            console.log(r)
        })
    }

    return (<>

        <button onClick={() => { connectToSocket() }}>Connect</button>
        <button onClick={() => { disconnectToSocket() }}>Disconnect</button>
        <button onClick={() => { send() }}>send</button>

    </>)
}


export default Home;