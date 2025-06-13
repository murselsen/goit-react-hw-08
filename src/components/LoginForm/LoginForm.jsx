import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const emailInput = nanoid();
  const passwordInput = nanoid();
  const LoginFormValidationSchema = Yup.object().shape({
    email: Yup.string().email("🚫 Invalid email").required("❗ Required"),
    password: Yup.string().min(6, "❗ Too Short!").required("❗ Required"),
  });
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
        validationSchema={LoginFormValidationSchema}
      >
        <Form className={css.Form}>
          <h2>LOGIN FORM</h2>
          <div className={css.FormRow}>
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
              <ErrorMessage
                name="email"
                component={"span"}
                className={css.ErrorMessage}
              />
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
              <ErrorMessage
                name="password"
                component={"span"}
                className={css.ErrorMessage}
              />
            </div>
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
