import React, { useEffect } from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Cryptocurrencies, News, Statistics } from "../component";

const { Title } = Typography;

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
