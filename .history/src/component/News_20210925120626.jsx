import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";

const { Text, Title } = Typography;
const { Option } = Select;

function News({ getNews, newsData, simplified }) {
  useEffect(() => {
    getNews({ category: "Crytocurrency", count: simplified ? 10 : 100 });
  }, []);
  return <div>News</div>;
}

const mapState = ({ news, loading }) => ({ ...news, ...loading });

const mapDispatch = ({ news }) => news;

export default connect(mapState, mapDispatch)(News);
