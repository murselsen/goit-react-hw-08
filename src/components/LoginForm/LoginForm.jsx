import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { selectAuthError, selectAuthUser } from '../../redux/auth/selectors';

// Styles
import css from './LoginForm.module.css';

const LoginForm = () => {
	const dispatch = useDispatch();

	const authError = useSelector(selectAuthError);

	useEffect(() => {
		if (authError) {
			toast.error(`Error: ${authError}`);
		}
	}, [authError]);

	const emailInput = nanoid();
	const passwordInput = nanoid();
	const LoginFormValidationSchema = Yup.object().shape({
		email: Yup.string().email('🚫 Invalid email').required('❗ Required'),
		password: Yup.string().required('❗ Required'),
	});

	const formHandleSubmit = (values, actions) => {
		dispatch(login(values));

		actions.resetForm();
	};

	return (
		<>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={formHandleSubmit}
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
								component={'span'}
								className={css.ErrorMessage}
							/>
						</div>
					</div>
					<div className={css.FormRow}>
						<div className={css.FormGroup}>
							<label
								htmlFor={passwordInput}
								className={css.Label}
							>
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
								component={'span'}
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
