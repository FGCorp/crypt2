import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";

const { Text, Title } = Typography;
const { Option } = Select;

function News({ getNews, newsData, simplified, loadingList }) {
  const loadingNews = loadingList.find((item) => item.id === "3")?.loading;

  useEffect(() => {
    getNews({ category: "Crytocurrency", count: simplified ? 10 : 100 });
  }, []);
  return (
    <Card
      loading={loadingNews}
      title={
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
      }
    ></Card>
  );
}

const mapState = ({ news, loading }) => ({ ...news, ...loading });

const mapDispatch = ({ news }) => news;

export default connect(mapState, mapDispatch)(News);
