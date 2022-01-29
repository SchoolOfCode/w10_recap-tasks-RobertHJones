import "./App.css";
import articles from "../../libs/articles";
import Article from "../Article";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div className="App">
      <h1>WikiPigeon</h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      {articles.map((item, index) => {
        return <Article title={item.title} paragraph={item.paragraphs} />;
      })}
      {/* <article className="post">
        <h2>{articles[0].title}</h2>
        {articles[0].paragraphs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
        <button className="like-button">Like 👍</button>
        <section className="comment-section">
          {articles[0].comments.map((comment) => {
            return (
              <div className="comment">
                <h4>{comment.name} says:</h4>
                <p>{comment.text}</p>
              </div>
            );
          })}
        </section>
      </article>
      <h2>{articles[1].title}</h2>
      {articles[1].paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <button className="like-button">Like 👍</button>
      <section className="comment-section">
        {articles[1].comments.map((comment) => {
          return (
            <div className="comment">
              <h4>{comment.name} says:</h4>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </section> */}
    </div>
  );
}

export default App;
