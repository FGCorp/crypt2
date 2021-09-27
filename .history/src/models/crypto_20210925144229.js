import Services from "../services";

const crypto = {
  state: {
    coinsData: [],
    coinData: [],
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
  },
};

export default crypto;
