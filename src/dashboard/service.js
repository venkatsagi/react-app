import axios from 'axios';

export const fetchData = (paload) => {
    return axios({
        method: "get",
        url: "http://localhost:8080/mocks/data.json",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    })
};