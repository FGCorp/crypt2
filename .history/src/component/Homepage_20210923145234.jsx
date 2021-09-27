import React, { useEffect } from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { Title } = Typography;

function Homepage({ getExchanges, exchangesData }) {
  useEffect(() => {
    await getExchanges();

    console.log(exchangesData);
  }, []);

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptcurrencies" value={5}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={5}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={5}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={5}></Statistic>
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={5}></Statistic>
        </Col>
      </Row>
    </>
  );
}

const mapState = ({ crypto }) => crypto;

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Homepage);
