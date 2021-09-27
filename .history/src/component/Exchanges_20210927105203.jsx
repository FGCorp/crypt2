import React, { useEffect } from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar, Spin } from "antd";
import HTMLReactParser from "html-react-parser";
import { connect } from "react-redux";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = ({ getExchanges, exchangesData, loadingList }) => {
  const loadingExchanges = loadingList.find((item) => item.id === "6")?.loading;

  useEffect(() => {
    getExchanges();
  }, []);

  if (loadingExchanges)
    return (
      <Row justify="space-around" align="middle" style={{ height: "100vh" }}>
        <Spin size="large" tip="Loading..." />
      </Row>
    );
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesData?.data?.data?.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Exchanges);
