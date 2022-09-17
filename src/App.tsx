import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import CoinListing from "./views/coin-listing";
import CoinDetails from "./views/coin-details";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CoinListing} />
        <Route path="/coin/:id" component={CoinDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
