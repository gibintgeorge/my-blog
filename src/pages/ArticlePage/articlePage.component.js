import React, { useState, useEffect } from "react";
import ArticleList from "../../component/article-list.component";
import CommentsList from "../../component/comments-list.component";
import UpvoteSection from "../../component/upvote-section.component";
import AddCommentForm from "../../component/add-comment-form.component";

import articles from "../Articles";

const ArticlePage = ({ match }) => {
  const name = match.params.name;

  const article = articles.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  //useEfffect does not support async
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);
  if (!article) {
    return <h2>Article named "{name}" does not exist</h2>;
  }
  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <React.Fragment>
      <h1>{article.title}</h1>

      {
        //since there is multiple paragraphs in the content
        article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))
      }
      <UpvoteSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </React.Fragment>
  );
};

export default ArticlePage;
