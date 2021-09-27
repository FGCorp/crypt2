import Services from "../services";

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
    async getNews(data) {
      const params = {
        method: "get",
        url: `/search?q=${data.newscategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${data.count}`,
        id: "3",
      };
      const response = await Services.runServiceNews(params);
      this.newsReducer(response);
    },
  },
};

export default news;
