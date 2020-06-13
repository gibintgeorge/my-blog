import React from "react";
import articles from "../Articles";

const ArticlePage = ({ match }) => {
  const name = match.params.name;

  const article = articles.find((article) => article.name === name);
  if (!article) {
    return <h2>Article named "{name}" does not exist</h2>;
  }
  return (
    <React.Fragment>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </React.Fragment>
  );
};

export default ArticlePage;
