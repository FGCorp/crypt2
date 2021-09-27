import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card, Space } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Cryptocurrencies, News } from "../component";

const { Title } = Typography;

function Homepage({ getCoins }) {
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Cryptocurrencies simplified />
      <div className="home-heading-contaier">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
        <News simplified />
      </div>
    </Space>
  );
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Homepage);
