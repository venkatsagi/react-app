import axios from 'axios';

export const fetchData = () => {
  return axios({
    method: 'get',
    url: 'http://localhost:8080/mocks/data.json',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => res.data);
};
