import React from "react";
import { Space } from "antd";

import { Cryptocurrencies, News, Statistics } from "../component";

function Homepage() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Statistics />
      <Cryptocurrencies simplified />
      <News simplified />
    </Space>
  );
}

export default Homepage;
