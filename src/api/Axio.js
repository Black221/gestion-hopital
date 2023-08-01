import axios from "axios";

export default axios.create({
    baseURL: "https://54.159.196.225:443/api/v1",
    headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    }
});