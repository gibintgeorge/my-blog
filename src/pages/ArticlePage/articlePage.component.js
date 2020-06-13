import React from "react";
import ArticleList from "../../component/article-list.component";
import articles from "../Articles";

const ArticlePage = ({ match }) => {
  const name = match.params.name;

  const article = articles.find((article) => article.name === name);
  if (!article) {
    return <h2>Article named "{name}" does not exist</h2>;
  }
  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <React.Fragment>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </React.Fragment>
  );
};

export default ArticlePage;
