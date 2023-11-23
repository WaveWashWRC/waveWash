import axios from 'axios';

const PerformRequest = (url, method, body) => {
  // initializing the axios instance with custom configs
  const Token = localStorage.getItem('Token');
  const api = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${Token}`,
    },
  });

  return new Promise((resolve, reject) => {
    api
      .request({ method: method, url: url, data: body, })
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export default PerformRequest;
