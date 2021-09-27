import React, { useEffect } from "react";
import { Space } from "antd";
import { connect } from "react-redux";

import { Cryptocurrencies, News, Statistics } from "../component";

function Homepage({ getCoins, getNews }) {
  useEffect(() => {
    getCoins();
    getNews();
  }, []);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Statistics />
      <Cryptocurrencies simplified />
      <News simplified />
    </Space>
  );
}

const mapDispatch = ({ crypto, news }) => ({ ...crypto, ...news });

export default connect(mapDispatch)(Homepage);
