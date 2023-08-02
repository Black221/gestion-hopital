import axios from "axios";

export default axios.create({
    baseURL: "http://172.31.89.205:4444/api/v1",
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    }
});