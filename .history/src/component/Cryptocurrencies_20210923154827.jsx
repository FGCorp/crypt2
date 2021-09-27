import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { connect } from "react-redux";

function Cryptocurrencies() {
  return <div>Cryptocurrencies</div>;
}

const mapState = ({ crypto, loading }) => ({ ...crypto, ...loading });

const mapDispatch = ({ crypto }) => crypto;

export default connect(mapState, mapDispatch)(Cryptocurrencies);
