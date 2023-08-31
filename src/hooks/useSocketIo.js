import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = (room, username) => {

    const SOCKET_BASE_URL = "http://localhost:4343"


    const [socket, setSocket] = useState();
    const [socketResponse, setSocketResponse] = useState({
        to: "",
        from: "",
        measure: "",
    });
    const [isConnected, setConnected] = useState(false);
    const sendData = useCallback(
        (payload) => {
            socket.emit("sendMessageToUser", {
                receiverName: room,
                message: payload.content,
                senderName: username,
            });
        },
        [socket, room]
    );
    useEffect(() => {
        const s = io(SOCKET_BASE_URL, {
            reconnection: false,
        });
        setSocket(s);
        s.on("connect", () => setConnected(true));
        s.on("lhacksrt", (res) => {
            console.log(res);
            setSocketResponse({
                to: res.to,
                from: res.from,
                measure: res.measure,
            });
        });
        return () => {
            s.disconnect();
        };
    }, [room]);

    return { socketResponse, isConnected, sendData };
};