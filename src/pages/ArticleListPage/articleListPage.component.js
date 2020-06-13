import React from "react";
import ArticleList from "../../component//article-list.component";

import articles from "../Articles";

const ArticleListPage = () => {
  return (
    <React.Fragment>
      <h1>Article List</h1>
      <ArticleList articles={articles} />
    </React.Fragment>
  );
};

export default ArticleListPage;
