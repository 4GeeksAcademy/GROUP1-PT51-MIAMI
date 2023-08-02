import { useState } from 'react';


function AuthContext() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedin, setIsLoggedin] = useState(false);

	const login = (e) => {
		e.preventDefault();
		console.log(name, email, password);
		const userData = {
			name,
			email,
			password,
		};
		localStorage.setItem('token-info', JSON.stringify(userData));
		setIsLoggedin(true);
		setName('');
		setEmail('');
		setPassword('');
	};

	const logout = () => {
		localStorage.removeItem('token-info');
		setIsLoggedin(false);
	};

	return (
		<>
			<div style={{ textAlign: 'center' }}>
				<h1>This is React WebApp </h1>
				{!isLoggedin ? (
					<>
						<form action="">
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								value={name}
								placeholder="Name"
							/>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								placeholder="Email"
							/>
							<input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								placeholder="Password"
							/>
							<button type="submit" onClick={login}>
								GO
							</button>
						</form>
					</>
				) : (
					<>
						<h1>User is logged in</h1>
						<button onClickCapture={logout}>logout user</button>
					</>
				)}
			</div>
		</>
	);
}

export default AuthContext;
