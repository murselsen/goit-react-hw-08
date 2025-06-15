import React from 'react';
import css from './styles/Page.module.css';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const Registration = () => {
	return (
		<div className={css.Container}>
			<RegisterForm />
		</div>
	);
};

export default Registration;
