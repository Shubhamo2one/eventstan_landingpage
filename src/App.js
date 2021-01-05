import React, { Component } from "react";
import Home from "./Home";
import Homeext from "./Homeext";
import Footer from "./Footer";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/eventstan" component={Home} />
          <Route exact path="/professional" component={Homeext} />
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
