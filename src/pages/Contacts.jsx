import React from 'react';
import pageCss from './styles/Page.module.css';
import css from './styles/Contacts.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const Contacts = () => {
	const nameInput = nanoid();
	const phoneInput = nanoid();

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Name is required')
			.min(2, 'Name must be at least 2 characters long')
			.max(50, 'Name must not exceed 50 characters'),
		phone: Yup.string()
			.required('Phone number is required')
			.matches(
				/^\d{3}-\d{2}-\d{2}$/,
				'Phone number must be in the format XXX-XX-XX'
			),
	});
	return (
		<div className={pageCss.Container}>
			<div className={`${pageCss.Row}`}>
				<div className={pageCss.Column}>
					<ul className={css.ContactsList}>
						<ContactItem />
						<ContactItem />
						<ContactItem />
						<ContactItem />

						<ContactItem />
					</ul>
				</div>
				<div className={pageCss.Column}>
					<Formik
						initialValues={{
							name: '',
							phone: '',
						}}
						onSubmit={() => {}}
						validationSchema={validationSchema}
					>
						<Form className={css.Form}>
							<h2>New Contact Form</h2>

							<div className={css.FormRow}>
								<div className={css.FormGroup}>
									<label
										htmlFor={nameInput}
										className={css.Label}
									>
										Name
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
							</div>
							<div className={css.FormRow}>
								<div className={css.FormGroup}>
									<label
										htmlFor={phoneInput}
										className={css.Label}
									>
										Phone
									</label>
									<Field
										type="text"
										name="phone"
										id={phoneInput}
										className={css.Input}
									/>
									<ErrorMessage
										name="name"
										component={'span'}
										className={css.ErrorMessage}
									/>
								</div>
							</div>
							<div className={css.FormRow}>
								<div className={css.FormGroup}>
									<button
										type="submit"
										className={css.Button}
									>
										Add Contact
									</button>
								</div>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
};

const ContactItem = () => {
	return (
		<li className={css.ContactItem}>
			<div className={css.Info}>
				<span className={css.Letter}>m</span>
				<h3 className={css.Name}>🕴️ mürsel</h3>
				<p className={css.Phone}>📞 785-54-34</p>
			</div>
			<div className={css.Actions}>
				<button className={css.ActionButton}>Delete</button>
				<button className={css.ActionButton}>Edit</button>
			</div>
		</li>
	);
};

export default Contacts;
