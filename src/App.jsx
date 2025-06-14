import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

// Pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Registration = lazy(() => import('./pages/Registration'));
const Contacts = lazy(() => import('./pages/Contacts'));

// App
const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(current());
	}, [dispatch]);

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
