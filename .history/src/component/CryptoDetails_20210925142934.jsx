import React, { useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { connect } from "react-redux";

const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails({ getCoin }) {
  const coinId = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");

  useEffect(() => {
    getCoin(coinId);
  }, []);
  return <div>CryptoDetails</div>;
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(CryptoDetails);
