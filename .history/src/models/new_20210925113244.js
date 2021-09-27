const news = {
  state: {
    newsData: [],
  },
  reducers: {
    newsReducer: (state, payload) => {
      return {
        ...state,
        newsData: payload,
      };
    },
  },
  effects: {
    async getNews() {
      const params = { method: "get", url: "/trendingtopics", id: "3" };
      //const response = await runServiceNew(params);
      this.newsReducer(response);
    },
  },
};

export default news;
