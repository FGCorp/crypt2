import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import Components from "./component";

const { Title } = Typography;

const { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } =
  Components;

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>

              <Route exact path="/exchanges">
                <Exchanges />
              </Route>

              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>

              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>

      <div className="footer">
        <Title level={5} style={{ color: "white", textAlign: "center" }}>
          Cryptoo
        </Title>
        <Space>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/exchages">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
}

export default App;
