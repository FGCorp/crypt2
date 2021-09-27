import axios from "axios";
import store from "../store";

const runServiceCrypto = (params) => {
  const { method, data, url, id } = params;
  store.dispatch.loading.setLoading({ id, loading: true });

  return axios({
    method,
    url: "https://coinranking1.p.rapidapi.com" + url,
    data,
    headers: {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "1f0d1393f3msh7ad3f302b4a22fbp1fe286jsn61c2734b706a",
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("SERVICE ERROR-->", err);
      return null;
    })
    .finally(() => store.dispatch.loading.setLoading({ id, loading: false }));
};

const runServiceNews = (params) => {
  const { method, data, url, id } = params;
  store.dispatch.loading.setLoading({ id, loading: true });

  return axios({
    method,
    url: "https://bing-news-search1.p.rapidapi.com/news" + url,
    data,
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "1f0d1393f3msh7ad3f302b4a22fbp1fe286jsn61c2734b706a",
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("SERVICE ERROR-->", err);
      return null;
    })
    .finally(() => store.dispatch.loading.setLoading({ id, loading: false }));
};

export default runServiceCrypto;
