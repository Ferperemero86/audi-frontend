import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/index.css";

import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
    return (
        <Router>
            <Header />
            <Route path="/" component={Home} />
        </Router>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));