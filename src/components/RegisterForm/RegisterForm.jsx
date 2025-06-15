import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectAuthError, selectAuthUser } from '../../redux/auth/selectors';

// Styles
import css from './RegisterForm.module.css';

const RegisterForm = () => {
	const nameInput = nanoid();
	const emailInput = nanoid();
	const passwordInput = nanoid();
	const checkPasswordInput = nanoid();
	const dispatch = useDispatch();

	const authError = useSelector(selectAuthError);
	const authUser = useSelector(selectAuthUser);

	useEffect(() => {
		if (authError) {
			toast.error(`Error: ${authError}`);
		}
	}, [authError]);
	useEffect(() => {
		if (authUser && authUser.name !== null) {
			toast.success(`Welcome, ${authUser.name}!`);
		}
	}, [authUser]);

	// Form submission handler
	const formHandleSubmit = (values, actions) => {
		dispatch(register(values));
		actions.resetForm();
	};

	// Form validation schema
	const registerFormValidationSchema = Yup.object().shape({
		name: Yup.string()
			.required('❗ Required')
			.min(3, '🚫 Username must be at least 3 characters'),
		email: Yup.string().email('🚫 Invalid email').required('❗ Required'),
		password: Yup.string()
			.min(8, '🚫 Password must be at least 8 characters')
			.required('❗ Required'),
		checkPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], '🚫 Passwords must match')
			.required('❗ Required'),
	});

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password: '',
					checkPassword: '',
				}}
				onSubmit={formHandleSubmit}
				validationSchema={registerFormValidationSchema}
				validateOnMount={true}
				validateOnBlur={true}
				validateOnChange={true}
			>
				<Form className={css.Form}>
					<h2>REGISTER FORM</h2>

					<div className={css.FormRow}>
						<div className={css.FormGroup}>
							<label htmlFor={nameInput} className={css.Label}>
								Username
							</label>
							<Field
								type="text"
								name="name"
								id={nameInput}
								className={css.Input}
							/>
							<ErrorMessage
								name="name"
								component={'span'}
								className={css.ErrorMessage}
							/>
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
						<div className={css.FormGroup}>
							<label
								htmlFor={checkPasswordInput}
								className={css.Label}
							>
								Check Password
							</label>
							<Field
								type="password"
								name="checkPassword"
								id={checkPasswordInput}
								className={css.Input}
							/>
							<ErrorMessage
								name="checkPassword"
								component={'span'}
								className={css.ErrorMessage}
							/>
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
