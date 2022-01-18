import Services from "../services";

const crypto = {
  state: {
    coinsData: [],
    coinData: [],
    coinHistoryData: [],
    exchangesData: [],
  },
  reducers: {
    coinsReducer: (state, payload) => {
      return {
        ...state,
        coinsData: payload,
      };
    },
    coinReducer: (state, payload) => {
      return {
        ...state,
        coinData: payload,
      };
    },
    coinHistoryReducer: (state, payload) => {
      return {
        ...state,
        coinHistoryData: payload,
      };
    },
    exchangesReducer: (state, payload) => {
      return {
        ...state,
        exchangesData: payload,
      };
    },
  },
  effects: {
    async getCoins() {
      const params = { method: "get", url: "/coins", id: "2" };
      const response = await Services.runServiceCrypto(params);
      this.coinsReducer(response);
    },
    async getCoin(ID) {
      const params = { method: "get", url: "/coin/" + ID, id: "4" };
      const response = await Services.runServiceCrypto(params);
      this.coinReducer(response);
    },
    async getCoinHistory(data) {
      const params = {
        method: "get",
        url: "/coin/" + data.id + "/history",
        id: "5",
        timePeriod: data.time,
      };
      const response = await Services.runServiceCrypto(params);
      this.coinHistoryReducer(response);
    },
    async getExchanges() {
      const params = { method: "get", url: "/exchanges", id: "6" };
      const response = await Services.runServiceCrypto(params);
      this.exchangesReducer(response);
    },
  },
};

export default crypto;
