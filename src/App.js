import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//User defined Components
import HomePage from "./pages/HomePage/homepage.component";
import AboutPage from "./pages/AboutPage/aboutPage.component";
import ArticleListPage from "./pages/ArticleListPage/articleListPage.component";
import NavBar from "./component/navbar.component";
import ArticlePage from "./pages/ArticlePage/articlePage.component";
import PageNotFound from "./pages/not-found/not-found.component";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/article-list" component={ArticleListPage} exact />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
