import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import Components from "./component";

const { Navbar, Exchanges, Homepage, Cryptcurrencies, CryptoDetails, News } =
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
                <Cryptcurrencies />
              </Route>

              <Route exact path="/crypt">
                <CryptoDetails />
              </Route>

              <Route exact path="/">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
