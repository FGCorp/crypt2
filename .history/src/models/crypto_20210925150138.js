import Services from "../services";

const crypto = {
  state: {
    coinsData: [],
    coinData: [],
    coinHistoryData: [],
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
        url: "/coin/" + data.id + "/history/" + data.time,
        id: "4",
      };
      const response = await Services.runServiceCrypto(params);
      this.coinHistoryReducer(response);
    },
  },
};

export default crypto;
