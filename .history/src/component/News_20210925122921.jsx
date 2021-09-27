import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Select, Typography, Row, Col, Avatar, Card, Input } from "antd";
import { Link } from "react-router-dom";

const { Text, Title } = Typography;
const { Option } = Select;
const notFoundImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

function News({ getNews, newsData, simplified, loadingList }) {
  const loadingNews = loadingList.find((item) => item.id === "3")?.loading;

  useEffect(() => {
    getNews({ category: "Crytocurrency", count: simplified ? 6 : 12 });
  }, []);
  return (
    <Card
      loading={loadingNews}
      title={
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
      }
      extra={
        simplified ? (
          <Title level={3} className="show-more">
            <Link to="/news">Show More</Link>
          </Title>
        ) : (
          <Input
            //value={searchValue}
            //onChange={(e) => setSearchValue(e.target.value)}
            style={{ width: "400px" }}
            size="large"
            placeholder="Search in Cryptocurrencies..."
          ></Input>
        )
      }
    >
      <Row gutter={[24, 24]}>
        {newsData.value.map((item, index) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
            <Card hoverable className="news-card">
              <a href={item.url} target="_blank" rel="noreferer noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {item.name}
                  </Title>
                  <img
                    src={item?.image?.thumbnail?.contentUrl || notFoundImage}
                    alt="cryptoo"
                  ></img>
                </div>
                <p>
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)} ...`
                    : item.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        item.provider[0]?.image?.thumbnail?.contentUrl ||
                        notFoundImage
                      }
                    ></Avatar>
                  </div>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
}

const mapState = ({ news, loading }) => ({ ...news, ...loading });

const mapDispatch = ({ news }) => news;

export default connect(mapState, mapDispatch)(News);
