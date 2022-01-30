import "./App.css";
import Article from "../Article";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login";

function App() {
  const { isAuthenticated } = useAuth0();

  // useEffect(() => {
  //   loginWithRedirect();
  // }, []);

  return (
    <div className="App">
      {isAuthenticated ? (
        <main>
          <Login />
          <h1>WikiPigeon</h1> <Article />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
