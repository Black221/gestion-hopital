import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.100.37:4444/api/v1",
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    }
});