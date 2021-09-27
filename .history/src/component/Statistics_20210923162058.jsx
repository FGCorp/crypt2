import { Card, Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import React from "react";
import { connect } from "react-redux";

const { Title } = Typography;
function Statistics({ getCoins, coinsData, loadingList }) {
  const loadingCoins = loadingList.find((item) => item.id === "2")?.loading;

  return (
    <Card
      title={
        <Title level={2} className="heading">
          Global Crypto Stats
        </Title>
      }
      loading={loadingCoins}
    >
      <Row>
        <Col xs={24} sm={12} lg={6}>
          <Statistic
            title="Total Cryptcurrencies"
            value={coinsData?.data?.stats.total}
          ></Statistic>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Statistic
            title="Total Exchanges"
            value={millify(coinsData?.data?.stats.totalExchanges || 0)}
          ></Statistic>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Statistic
            title="Total Market Cap"
            value={millify(coinsData?.data?.stats.totalMarketCap || 0)}
          ></Statistic>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Statistic
            title="Total 24h Volume"
            value={millify(coinsData?.data?.stats.total24hVolume || 0)}
          ></Statistic>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Statistic
            title="Total Markets"
            value={millify(coinsData?.data?.stats.totalMarkets || 0)}
          ></Statistic>
        </Col>
      </Row>
    </Card>
  );
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Statistics);
