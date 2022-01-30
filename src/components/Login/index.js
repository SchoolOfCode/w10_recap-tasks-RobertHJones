import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import css from "./Index.module.css";

const { loginPage, header, button } = css;

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
        <div className={loginPage}>
          <h1 className={header}>Please log in to be able to view this page</h1>
          <button className={button} onClick={() => loginWithRedirect()}>
            Log in
          </button>
        </div>
      )}{" "}
    </div>
  );
};

export default Login;
