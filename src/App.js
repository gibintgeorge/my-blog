import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/homepage.component";
import AboutPage from "./pages/AboutPage/aboutPage.component";
import ArticleListPage from "./pages/ArticleListPage/articleListPage.component";
import NavBar from "./component/navbar.component";
import ArticlePage from "./pages/ArticlePage/articlePage.component";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/article-list" component={ArticleListPage} exact />
          <Route path="/article/:name" component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
