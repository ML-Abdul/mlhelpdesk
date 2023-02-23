import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route element={<Login />} path='/' />
					<Route element={<Dashboard />} path='/dashboard' />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
