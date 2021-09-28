import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import { Navbar } from "./component";

import Routes from "./config/Routes";

const { Title } = Typography;

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">{<Routes />}</div>
        </Layout>

        <div className="footer">
          <Title level={5} style={{ color: "white", textAlign: "center" }}>
            Cryptoo
          </Title>
          <Space>
            <Link to="/">Homepage</Link>
            <Link to="/exchages">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
