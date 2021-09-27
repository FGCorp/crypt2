import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Typography } from "antd";
import { connect } from "react-redux";

const { Paragraph, Title, Text } = Typography;
function Cryptocurrencies({ coinsData, loadingList, simplified, getCoins }) {
  const [coins, setCoins] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const loadingCoins = loadingList.find((item) => item.id === "2")?.loading;

  useEffect(() => {
    const filteredCoins = coinsData?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    setCoins(
      searchValue === ""
        ? coinsData?.data?.coins.slice(
            0,
            simplified ? 10 : coinsData?.data?.coins.length
          )
        : filteredCoins
    );
  }, [coinsData, searchValue]);

  useEffect(() => {
    if (coinsData.length === 0) getCoins();
  }, []);

  return (
    <Card
      loading={loadingCoins}
      style={{ backgroundColor: !simplified ? "transparent" : "" }}
      title={
        simplified ? (
          <Title level={2} className="home-title">
            Top 10 Cryptocurrencies in the world
          </Title>
        ) : (
          <Title level={2} className="home-title">
            Cryptocurrencies in the world
          </Title>
        )
      }
      extra={
        simplified ? (
          <Title level={3} className="show-more">
            <Link to="/cryptocurrencies">Show More</Link>
          </Title>
        ) : (
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{ width: "300px" }}
            size="large"
            placeholder="Search in Cryptocurrencies..."
          ></Input>
        )
      }
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
