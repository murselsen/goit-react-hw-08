import React, { useEffect, Suspense, lazy } from 'react';

import axios from 'axios';
axios.defaults.headers.common['baseURL'] =
	'https://connections-api.goit.global';

import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
// Redux
import { current } from './redux/auth/operations';

// Styles
import './App.css';

// Auth components
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

// App components
import AppBar from './components/AppBar/AppBar';
import AppFooterBar from './components/AppFooterBar/AppFooterBar';
import { selectAuthToken } from './redux/auth/selectors';

// Pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Registration = lazy(() => import('./pages/Registration'));
const Contacts = lazy(() => import('./pages/Contacts'));

// App
const App = () => {
	const dispatch = useDispatch();
	const authToken = useSelector(selectAuthToken);
	useEffect(() => {
		if (!authToken) {
			return;
		}
		dispatch(current());
	}, [dispatch, authToken]);

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Toaster />
			<div className="app">
				<AppBar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={
							<RestrictedRoute>
								<Login />
							</RestrictedRoute>
						}
					/>
					<Route
						path="/register"
						element={
							<RestrictedRoute>
								<Registration />
							</RestrictedRoute>
						}
					/>
					<Route
						path="/contacts"
						element={
							<PrivateRoute>
								<Contacts />
							</PrivateRoute>
						}
					/>
				</Routes>
				<AppFooterBar />
			</div>
		</Suspense>
	);
};

export default App;
