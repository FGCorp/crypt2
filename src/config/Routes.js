import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "../component";

function Routes() {
  return (
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
  );
}
export default Routes;
