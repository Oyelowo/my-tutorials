import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { logoutAllTabsEventListener } from "./utils/authentication";

class App extends Component {
  componentDidMount(){
    logoutAllTabsEventListener();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
