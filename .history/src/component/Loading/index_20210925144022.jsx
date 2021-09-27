import React from "react";
import { Layout, Row, Spin } from "antd";

const Loading = (
  <Layout.Content>
    <Row
      type="flex"
      justify="space-around"
      align="middle"
      style={{ height: "100vh" }}
    >
      <Spin size="large" tip="Loading..." />
    </Row>
  </Layout.Content>
);

export const LoadingWithText = (vals) => (
  <Row
    type="flex"
    justify="space-around"
    align="middle"
    style={{ width: "100%", height: vals.height ? vals.height : "80vh" }}
  >
    <Spin tip={vals.tip} size="large" />
  </Row>
);

export default Loading;
