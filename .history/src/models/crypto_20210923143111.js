import runService from "../services";

const crypto = {
  state: {},
  reducers: {},
  effects: {
    async getExchanges() {
      const params = { method: "get", url: "/exchanges", id: "1" };
      const response = await runService(params);

      console.log(response);
    },
  },
};

export default crypto;
