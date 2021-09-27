import axios from "axios";

axios.defaults.baseURL = "https://coinranking1.p.rapidapi.com";
axios.defaults.headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "1f0d1393f3msh7ad3f302b4a22fbp1fe286jsn61c2734b706a",
};

const runService = (params) => {
  const { method, data, url } = params;

  return axios({
    method,
    url,
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("SERVICE ERROR-->", err);
      return null;
    });
};

export default runService;
