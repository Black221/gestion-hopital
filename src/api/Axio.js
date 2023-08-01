import axios from "axios";

export default axios.create({
    baseURL: "54.159.196.225:4444/api/v1",
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    }
});