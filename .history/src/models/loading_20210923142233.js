import runService from "../services";

const crypto = {
  state: {
    loadingList: [],
  },
  reducers: {
    setLoading: (state, payload) => {
      return {
        ...state,
        loadingList: [...state.loadingList, payload],
      };
    },
  },
  effects: {},
};

export default crypto;
