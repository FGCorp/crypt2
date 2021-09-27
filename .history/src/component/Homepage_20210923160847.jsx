import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card, Space } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Cryptocurrencies, News } from "../component";

const { Title } = Typography;

function Homepage({ getCoins, coinsData, loadingList }) {
  useEffect(() => {
    getCoins();
  }, []);

  const loadingCoins = loadingList.find((item) => item.id === "2")?.loading;

  return (
    <Space>
      <Card
        title={
          <Title level={2} className="heading">
            Global Crypto Stats
          </Title>
        }
        loading={loadingCoins}
      >
        <Row>
          <Col span={12}>
            <Statistic
              title="Total Cryptcurrencies"
              value={coinsData?.data?.stats.total}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Exchanges"
              value={millify(coinsData?.data?.stats.totalExchanges || 0)}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Market Cap"
              value={millify(coinsData?.data?.stats.totalMarketCap || 0)}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total 24h Volume"
              value={millify(coinsData?.data?.stats.total24hVolume || 0)}
            ></Statistic>
          </Col>
          <Col span={12}>
            <Statistic
              title="Total Markets"
              value={millify(coinsData?.data?.stats.totalMarkets || 0)}
            ></Statistic>
          </Col>
        </Row>
      </Card>

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
