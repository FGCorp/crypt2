import React, { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select, Spin } from "antd";
import { connect } from "react-redux";
import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails({ getCoin, loadingList, coinData }) {
  const coinId = useParams();
  const loadingCoin = loadingList.find((item) => item.id === "4")?.loading;
  const [timePeriod, setTimePeriod] = useState("7d");

  const cryptoDetails = coinData?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price || 0)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails?.volume && millify(cryptoDetails?.volume || 0)
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap || 0)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails?.allTimeHigh.price || 0)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.approvedSupply ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails?.totalSupply || 0)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails?.circulatingSupply || 0)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  useEffect(() => {
    getCoin(coinId.coinId);
  }, []);

  if (loadingCoin)
    return (
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        style={{ height: "100vh" }}
      >
        <Spin size="large" tip="Loading..." />
      </Row>
    );

  return <div>{cryptoDetails?.name}</div>;
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(CryptoDetails);
