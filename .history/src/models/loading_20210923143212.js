import runService from "../services";

const crypto = {
  state: {
    loadingList: [],
  },
  reducers: {
    setLoading: (state, payload) => {
      return {
        ...state,
        loadingList: [
          ...state.loadingList.filter((item) => item.id !== payload.id),
          payload,
        ],
      };
    },
  },
  effects: {},
};

export default crypto;
