import Comments from "../Comments";
import articles from "../../libs/articles";
import "antd/dist/antd.css";
import { Button } from "antd";

import css from "./Article.module.css";

const { post } = css;

function Article({ title, paragraph }) {
  return (
    <article className={post}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      {/* {articles.paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })} */}
      <Button type="primary" className="like-button">
        Like 👍
      </Button>
      <section className="comment-section">
        {articles[0].comments.map((item, index) => {
          return <Comments name={item.name} text={item.text} key={index} />;
        })}
      </section>
    </article>
  );
}

export default Article;