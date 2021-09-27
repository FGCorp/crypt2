import React, { useEffect } from "react";
import { Space } from "antd";
import { connect } from "react-redux";

import { Cryptocurrencies, News, Statistics } from "../component";

function Homepage({ getCoins }) {
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Statistics />
      <Cryptocurrencies simplified />
      <News simplified />
    </Space>
  );
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Homepage);
