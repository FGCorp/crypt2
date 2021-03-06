import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Select, Typography, Row, Col, Avatar, Card, Input } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

const { Text, Title } = Typography;
const { Option } = Select;
const notFoundImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

function News({
  getNews,
  newsData,
  simplified,
  loadingList,
  coinsData,
  getCoins,
}) {
  const loadingNews = loadingList.find((item) => item.id === "3")?.loading;
  const loadingCrypto = loadingList.find((item) => item.id === "2")?.loading;

  const [newsCategory, setNewsCategory] = useState("Crytocurrency");

  useEffect(() => {
    if (coinsData.length === 0) getCoins();
  }, []);

  useEffect(() => {
    console.log(222);
    getNews({ category: newsCategory, count: simplified ? 6 : 12 });
  }, [newsCategory]);

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
          <Select
            loading={loadingCrypto}
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(e) => setNewsCategory(e)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Crytocurrency">Crytocurrency</Option>
            {coinsData?.data?.coins.map((item) => (
              <Option value={item.name}>{item.name}</Option>
            ))}
          </Select>
        )
      }
    >
      <Row gutter={[24, 24]}>
        {newsData?.value
          ?.sort(
            (a, b) =>
              moment(a.datePublished).valueOf() -
              moment(b.datePublished).valueOf()
          )
          .reverse()
          .map((item, index) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={index}>
              <Card hoverable className="news-card">
                <a href={item.url} target="_blank" rel="noreferer noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {item.name}
                    </Title>
                    <img
                      style={{ maxWidth: "200px", maxHeight: "100px" }}
                      src={item?.image?.thumbnail?.contentUrl || notFoundImage}
                      alt="cryptoo"
                    />
                  </div>
                  <p>
                    {item.description.length > 100
                      ? `${item.description.substring(0, 100)} ...`
                      : item.description}
                  </p>
                  <br />
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          item.provider[0]?.image?.thumbnail?.contentUrl ||
                          notFoundImage
                        }
                      />
                      <Text className="provider-name">
                        {item.provider[0]?.name}
                      </Text>
                    </div>

                    <Text>
                      {moment(item.datePublished).startOf("ss").fromNow()}
                    </Text>
                  </div>
                </a>
              </Card>
            </Col>
          ))}
      </Row>
    </Card>
  );
}

const mapState = ({ news, loading, crypto }) => ({
  ...news,
  ...loading,
  ...crypto,
});

const mapDispatch = ({ news, crypto }) => ({ ...news, ...crypto });

export default connect(mapState, mapDispatch)(News);
