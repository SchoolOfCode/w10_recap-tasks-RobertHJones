import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          {" "}
          Log Out
        </button>
      ) : (
        <div>
          <h1>Please log in to be able to view this page</h1>
          <button onClick={() => loginWithRedirect()}>Log in</button>
        </div>
      )}{" "}
    </div>
  );
};

export default Login;
