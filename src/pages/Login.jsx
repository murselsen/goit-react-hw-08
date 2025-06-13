import React from "react";
import css from "./Page.module.css";
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={css.Container}>
      <LoginForm />
    </div>
  );
};

export default Login;
