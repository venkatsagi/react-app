import axios from 'axios';

export const fetchData = () => {
  return axios({
    method: 'get',
    url: 'mocks/data.json',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(res => res.data);
};
