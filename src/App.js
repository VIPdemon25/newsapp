import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={18}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={18}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={18}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={18}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={18}
                  country={"in"}
                  category={"health"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={18}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={18}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={18}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
