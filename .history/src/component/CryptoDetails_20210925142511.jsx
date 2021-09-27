import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails() {
  const coinId = useParams();
  return <div>CryptoDetails</div>;
}

export default CryptoDetails;
