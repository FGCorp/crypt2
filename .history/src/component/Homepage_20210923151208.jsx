import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

function Homepage({
  getExchanges,
  getCoins,
  exchangesData,
  coinsData,
  loadingList,
}) {
  useEffect(() => {
    getExchanges();
    getCoins();
  }, []);

  const loadingCoins = loadingList.find((item) => item.id === "2")?.loading;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Card loading={loadingCoins}>
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
      <div className="home-heading-contaier">
        <Title level={2} className="home-title">
          Top 10 Cryptocurencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <div className="home-heading-contaier">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
    </>
  );
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Homepage);
