import Comments from "../Comments";
import articles from "../../libs/articles";
import "antd/dist/antd.css";
import { Button } from "antd";
import { useState } from "react";

import css from "./Article.module.css";

const { post } = css;

const mapComments = (article) => {
  return article.comments.map((item, index) => {
    return <Comments name={item.name} text={item.text} key={index} />;
  });
};
function Article() {
  const [liked, setLiked] = useState("Like 👍");

  function handleToggle() {
    if (liked === "Like 👍") {
      setLiked("Unlike");
    } else {
      setLiked("Like 👍");
    }
  }
  return (
    <div>
      {articles.map((article, index) => {
        return (
          <article className={post} key={index}>
            <h2>{article.title}</h2>
            <p>{article.paragraphs}</p>
            <Button
              onClick={handleToggle}
              type="primary"
              className="like-button"
            >
              {liked}
            </Button>
            <section className="comment-section">
              {mapComments(article)}
            </section>
          </article>
        );
      })}
    </div>
  );

  // return (
  //   <article className={post}>
  //     <h2>{title}</h2>
  //     <p>{paragraph}</p>

  //     <Button type="primary" className="like-button">
  //       Like 👍
  //     </Button>
  //     <section className="comment-section">
  //       {articles[0].comments.map((item, index) => {
  //         return <Comments name={item.name} text={item.text} key={index} />;
  //       })}
  //     </section>
  //   </article>
  // );
}

export default Article;
