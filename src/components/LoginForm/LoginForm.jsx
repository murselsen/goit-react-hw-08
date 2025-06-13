import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const emailInput = nanoid();
  const passwordInput = nanoid();
  // const usernameInput = nanoid();
  //   const checkPasswordInput = nanoid();
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          checkPassword: "",
        }}
        onSubmit={() => {}}
      >
        <Form className={css.Form}>
          <h2>LOGIN FORM</h2>
          <div className={css.FormRow}>
            {/* <div className={css.FormGroup}>
              <label htmlFor={usernameInput} className={css.Label}>
                Username
              </label>
              <Field
                type="text"
                name="username"
                id={usernameInput}
                className={css.Input}
              />
              <ErrorMessage name="username" component={"span"} />
            </div> */}
            <div className={css.FormGroup}>
              <label htmlFor={emailInput} className={css.Label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id={emailInput}
                className={css.Input}
              />
              <ErrorMessage name="email" component={"span"} />
            </div>
          </div>
          <div className={css.FormRow}>
            <div className={css.FormGroup}>
              <label htmlFor={passwordInput} className={css.Label}>
                Password
              </label>
              <Field
                type="password"
                name="password"
                id={passwordInput}
                className={css.Input}
              />
              <ErrorMessage name="password" component={"span"} />
            </div>
            {/* <div className={css.FormGroup}>
              <label htmlFor={checkPasswordInput} className={css.Label}>
                Check Password
              </label>
              <Field
                type="password"
                name="checkPassword"
                id={checkPasswordInput}
                className={css.Input}
              />
              <ErrorMessage name="checkPassword" component={"span"} />
            </div> */}
          </div>
          <div className={css.FormRow}>
            <div className={css.FormGroup}>
              <button type="submit" className={css.Button}>
                Login
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
