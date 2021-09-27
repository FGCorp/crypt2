import Services from "../services";

const crypto = {
  state: {
    coinsData: [],
  },
  reducers: {
    coinsReducer: (state, payload) => {
      return {
        ...state,
        coinsData: payload,
      };
    },
  },
  effects: {
    async getCoins() {
      const params = { method: "get", url: "/coins", id: "2" };
      const response = await Services.runServiceCrypto(params);
      this.coinsReducer(response);
    },
  },
};

export default crypto;
