import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import tr_TR from "antd/lib/locale/tr_TR";

import store from "./store";
import "antd/dist/antd.css";
import moment from "moment";

moment.locale("tr");

ReactDOM.render(
  <Router>
    <ConfigProvider locale={tr_TR}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </Router>,
  document.getElementById("root")
);
