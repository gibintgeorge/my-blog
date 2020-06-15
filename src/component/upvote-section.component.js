import React from "react";

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "POST",
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  return (
    <div className="upvote-section">
      <p>This post has been upvoted {upvotes} times</p>
      <button onClick={upvoteArticle}>Add Vote</button>
    </div>
  );
};

export default UpvoteSection;
