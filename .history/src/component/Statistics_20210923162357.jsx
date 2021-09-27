import { Card, Col, Row, Statistic, Typography } from "antd";
import millify from "millify";
import React from "react";
import { connect } from "react-redux";

const { Title } = Typography;
const { Grid } = Card;
const gridStyle = {
  width: "20%",
  textAlign: "center",
};
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
      <Grid style={gridStyle}>
        <Statistic
          title="Total Cryptcurrencies"
          value={coinsData?.data?.stats.total}
        ></Statistic>
      </Grid>

      <Grid style={gridStyle}>
        <Statistic
          title="Total Exchanges"
          value={millify(coinsData?.data?.stats.totalExchanges || 0)}
        ></Statistic>
      </Grid>

      <Grid style={gridStyle}>
        <Statistic
          title="Total Market Cap"
          value={millify(coinsData?.data?.stats.totalMarketCap || 0)}
        ></Statistic>
      </Grid>

      <Grid style={gridStyle}>
        <Statistic
          title="Total 24h Volume"
          value={millify(coinsData?.data?.stats.total24hVolume || 0)}
        ></Statistic>
      </Grid>

      <Grid style={gridStyle}>
        <Statistic
          title="Total Markets"
          value={millify(coinsData?.data?.stats.totalMarkets || 0)}
        ></Statistic>
      </Grid>
    </Card>
  );
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Statistics);
