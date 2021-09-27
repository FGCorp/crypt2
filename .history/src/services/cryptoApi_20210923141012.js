import axios from "axios";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/exchanges",
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "1f0d1393f3msh7ad3f302b4a22fbp1fe286jsn61c2734b706a",
  },
};

axios.defaults.baseURL = "https://coinranking1.p.rapidapi.com";
axios.defaults.headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "1f0d1393f3msh7ad3f302b4a22fbp1fe286jsn61c2734b706a",
};

const getData = (params) => {
  const { method, data, url } = params;
  axios({
    method,
    data,
    url,
  });
};
