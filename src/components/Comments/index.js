import css from "./Comments.module.css";

const { comments } = css;

function Comments({ name, text }) {
  return (
    <div className={comments}>
      <h4>{name} says:</h4>
      <p>{text}</p>
    </div>
  );
}

export default Comments;
