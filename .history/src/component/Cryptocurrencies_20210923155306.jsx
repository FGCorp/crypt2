import millify from "millify";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { connect } from "react-redux";

function Cryptocurrencies({ getCoins, coinsData, loadingList }) {
  const loadingCoins = loadingList.find((item) => item.id === "2")?.loading;

  const coins = coinsData?.data?.coins;
  return <Card loading={loadingCoins}></Card>;
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Cryptocurrencies);
