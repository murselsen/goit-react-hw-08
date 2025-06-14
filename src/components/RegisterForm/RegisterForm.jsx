import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

// Redux
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
// Styles
import css from "./RegisterForm.module.css";

const RegisterForm = () => {
  const usernameInput = nanoid();
  const emailInput = nanoid();
  const passwordInput = nanoid();
  const checkPasswordInput = nanoid();
  const dispatch = useDispatch();
  const formHandleSubmit = (values, actions) => {
    console.log("Form submitted with values:", values);
    console.log("Actions:", actions);
    dispatch(register(values));
  };
  const registerFormValidationSchema = Yup.object().shape({
    usernameInput: Yup.string()
      .required("❗ Required")
      .min(3, "🚫 Username must be at least 3 characters"),
    email: Yup.string().email("🚫 Invalid email").required("❗ Required"),
    password: Yup.string().required("❗ Required"),
    checkPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "🚫 Passwords must match")
      .required("❗ Required"),
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
        onSubmit={formHandleSubmit}
        validationSchema={registerFormValidationSchema}
      >
        <Form className={css.Form}>
          <h2>REGISTER FORM</h2>
          <div className={css.FormRow}>
            <div className={css.FormGroup}>
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
            </div>
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
            <div className={css.FormGroup}>
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
            </div>
          </div>
          <div className={css.FormRow}>
            <div className={css.FormGroup}>
              <button type="submit" className={css.Button}>
                Register
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
