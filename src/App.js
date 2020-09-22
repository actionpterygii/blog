import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch, HashRouter} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import useAPI from "./scripts/useAPI";
import Header from "./components/Header";
import Top from "./components/Top";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  const {fetchBlogInfo} = useAPI();

  useEffect(() => {
    fetchBlogInfo();
  }, []);

  return (
    <HashRouter>
      <Header />
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/post/:key" component={Post} />
        </Switch>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
