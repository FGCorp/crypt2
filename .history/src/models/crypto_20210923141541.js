import runService from "../services";

const crypto = {
  state: {},
  reducers: {},
  effects: {
    async getExchanges(data) {
      const params = { method: "get", url: "/exchanges" };
      const response = await runService(params);

      console.log(response);
    },
  },
};

export default crypto;
