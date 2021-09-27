import runService from "../services";

const crypto = {
  state: {
    exchangesData: [],
  },
  reducers: {
    getExchangesReducer: (state, payload) => {
      return {
        ...state,
        exchangesData: payload,
      };
    },
  },
  effects: {
    async getExchanges() {
      const params = { method: "get", url: "/exchanges", id: "1" };
      const response = await runService(params);
      this.getExchangesReducer(response.data);
    },
  },
};

export default crypto;
