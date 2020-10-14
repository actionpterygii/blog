import React, {useEffect} from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import useAPI from "./scripts/useAPI";
import Header from "./components/Header";
import Menu from "./components/Menu";
import PostList from "./components/PostList";
import Post from "./components/Post";
import CategoryList from "./components/CategoryList";
import Category from "./components/Category";
import TagList from "./components/TagList";
import Tag from "./components/Tag";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const {fetchBlogInfo} = useAPI();

  useEffect(() => {
    fetchBlogInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HashRouter>
      <Header />
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/post" component={PostList} />
          <Route exact path="/post/:key" component={Post} />
          <Route exact path="/category" component={CategoryList} />
          <Route exact path="/category/:key" component={Category} />
          <Route exact path="/tag" component={TagList} />
          <Route exact path="/tag/:key" component={Tag} />
          <Route exact path="/search" component={Search} />
        </Switch>
        <Menu />
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
