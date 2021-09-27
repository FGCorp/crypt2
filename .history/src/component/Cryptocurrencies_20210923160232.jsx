import millify from "millify";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import { connect } from "react-redux";

const { Paragraph } = Typography;
function Cryptocurrencies({ getCoins, coinsData, loadingList }) {
  const loadingCoins = loadingList.find((item) => item.id === "2")?.loading;

  const coins = coinsData?.data?.coins;

  console.log(coins);
  return (
    <Card loading={loadingCoins}>
      <Row gutter={[32, 32]} className="crypto-car-container">
        {coins.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
            <Link to={`/crypto/${coin.id}`}>
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={
                  <img
                    alt="Cryptoo"
                    className="crypto-image"
                    src={coin.iconUrl}
                  ></img>
                }
                hoverable
              >
                <Paragraph>Price: {millify(coin.price || 0)}</Paragraph>
                <Paragraph>
                  Market Cap: {millify(coin.marketCap || 0)}
                </Paragraph>
                <Paragraph>
                  Daily Change: {millify(coin.change || 0)}%
                </Paragraph>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Card>
  );
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Cryptocurrencies);
