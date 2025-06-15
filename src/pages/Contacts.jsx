import React, { useEffect } from 'react';

// Styles
import pageCss from './styles/Page.module.css';
import css from './styles/Contacts.module.css';

// Libraries
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
// import { toast } from 'react-hot-toast';

// Redux
import {
	addContact,
	fetchContacts,
	deleteContact,
} from '../redux/contacts/operations';
import { selectContacts, selectError } from '../redux/contacts/selectors';
import { setFilterType, setFilterValue } from '../redux/filters/actions';
import toast, { Toaster } from 'react-hot-toast';

const Contacts = () => {
	const dispatch = useDispatch();
	const error = useSelector(selectError);
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	useEffect(() => {
		if (error) {
			toast.error(`Error: ${error}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

	const formHandleSubmit = (values, actions) => {
		dispatch(addContact(values));
		actions.resetForm();
	};

	const contacts = useSelector(selectContacts);

	const nameInput = nanoid();
	const phoneInput = nanoid();

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required('Name is required')
			.min(2, 'Name must be at least 2 characters long')
			.max(50, 'Name must not exceed 50 characters'),
		number: Yup.string()
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
					<Formik
						initialValues={{
							name: '',
							number: '',
						}}
						onSubmit={formHandleSubmit}
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
										name="number"
										id={phoneInput}
										className={css.Input}
										mask="999-99-99"
										placeholder="123-45-67"
									/>

									<ErrorMessage
										name="number"
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
				<div className={pageCss.Column}>
					<div className={`${pageCss.Row}`}>
						<ContactSearchForm />
						{contacts.length > 0 ? (
							<ul className={css.ContactsList}>
								{contacts.map(contact => (
									<ContactItem
										key={contact.id}
										data={contact}
									/>
								))}
							</ul>
						) : (
							<h3 className={css.NotFoundTitle}>
								No contact record found...
							</h3>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const ContactItem = ({ data }) => {
	const dispatch = useDispatch();
	const { name, number } = data;
	const handleClick = () => {
		dispatch(deleteContact(data));
	};

	const contactsError = useSelector(selectError);
	useEffect(() => {
		contactsError &&
			toast.error(`Error deleting contact: ${contactsError}`);
	}, [contactsError]);

	return (
		<li className={css.ContactItem}>
			<div className={css.Info}>
				<span className={css.Letter}>{name[0]}</span>
				<h3 className={css.Name}>🕴️ {name}</h3>
				<p className={css.Phone}>📞 {number}</p>
			</div>
			<div className={css.Actions}>
				<button className={css.ActionButton} onClick={handleClick}>
					Delete
				</button>
			</div>
		</li>
	);
};

const ContactSearchForm = () => {
	const dispatch = useDispatch();
	const searchTypeID = nanoid();
	const searchValueID = nanoid();
	return (
		<Formik>
			<Form className={css.Form} style={{ minWidth: '650px' }}>
				<h5>Search Form</h5>
				<div className={css.FormRow} style={{ gap: '0' }}>
					<div className={css.FormGroup}>
						<label htmlFor={searchTypeID} className={css.Label}>
							Type
						</label>
						<select
							name="type"
							id={searchTypeID}
							className={css.Input}
							onChange={event => {
								const value = event.target.value;
								dispatch(setFilterType(value));

								document.getElementById(
									searchValueID
								).disabled = value === '' ? true : false;
							}}
						>
							<option value="">Select Type</option>
							<option value="name">Name</option>
							<option value="number">Phone</option>
						</select>
					</div>
					<div className={css.FormGroup}>
						<label htmlFor={searchValueID} className={css.Label}>
							Search Value
						</label>
						<Field
							type="text"
							name="value"
							id={searchValueID}
							className={css.Input}
							style={{ height: '28px' }}
							onChange={event =>
								dispatch(setFilterValue(event.target.value))
							}
							disabled={true}
						/>
					</div>
				</div>
			</Form>
		</Formik>
	);
};

export default Contacts;
