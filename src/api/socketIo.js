import { io } from "socket.io-client";

const socket = io("http://localhost:4343", {

    reconnectionDelayMax: 10000,
    autoConnect: false
});

export default socket;