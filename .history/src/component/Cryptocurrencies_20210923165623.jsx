import millify from "millify";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import { connect } from "react-redux";

const { Paragraph, Title, Text } = Typography;
function Cryptocurrencies({ getCoins, coinsData, loadingList, simplified }) {
  const loadingCoins = loadingList.find((item) => item.id === "2")?.loading;

  const coins = simplified
    ? coinsData?.data?.coins.slice(0, 10)
    : coinsData?.data?.coins;

  useEffect(() => {
    if (coinsData.length === 0) getCoins();
  }, []);
  return (
    <Card
      loading={loadingCoins}
      style={{ backgroundColor: !simplified ? "transparent" : "" }}
      title={
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
      }
      extra={
        <Input
          style={{ width: "100px" }}
          placeholder="Search in Cryptocurrencies..."
        ></Input>
      }
      actions={[
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>,
      ]}
    >
      <Row gutter={[32, 32]} className="crypto-car-container">
        {coins?.map((coin) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
            <Link to={`/crypto/${coin.id}`}>
              <Card
                title={
                  <Text style={{ color: coin.color }}>
                    {coin.rank}. {coin.name}
                  </Text>
                }
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
