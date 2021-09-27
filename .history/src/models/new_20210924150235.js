import runService from "../services/crypto";

const news = {
  state: {
    exchangesData: [],
    coinsData: [],
  },
  reducers: {
    exchangesReducer: (state, payload) => {
      return {
        ...state,
        exchangesData: payload,
      };
    },
    coinsReducer: (state, payload) => {
      return {
        ...state,
        coinsData: payload,
      };
    },
  },
  effects: {
    async getExchanges() {
      const params = { method: "get", url: "/exchanges", id: "1" };
      const response = await runService(params);
      this.exchangesReducer(response);
    },

    async getCoins() {
      const params = { method: "get", url: "/coins", id: "2" };
      const response = await runService(params);
      this.coinsReducer(response);
    },
  },
};

export default news;
