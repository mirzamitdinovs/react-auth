import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SecureRoute } from './container/SecureRoute';
import HomePage from './pages/HomePage';
import ModalPage from './pages/ModalPage';
import SigninPage from './pages/SignIn';
import SignupPage from './pages/SignUp';
import UserPage from './pages/UserPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/signup' element={<SignupPage />} />
				<Route path='/signin' element={<SigninPage />} />
				<Route path='/modal' element={<ModalPage />} />

				<Route path='/' element={<HomePage />} />
				<Route
					path='/user'
					element={
						<SecureRoute>
							<UserPage />
						</SecureRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
