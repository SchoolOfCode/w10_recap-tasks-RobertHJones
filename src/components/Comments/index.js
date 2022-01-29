function Comments({ name, text }) {
  return (
    <div className="comment">
      <h4>{name} says:</h4>
      <p>{text}</p>
    </div>
  );
}

export default Comments;
