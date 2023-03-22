import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import user from '../user.json'
import { UserContent } from "../App";
import "./style.css";
const Login = () => {
	const [account, setAccount] = useState([]);
	const emailRef = useRef();
	const { out } = useParams();
	const nameRef = useRef();
	const navigate = useNavigate();

	
	useEffect(() => {
				setAccount(user);
			;
	}, []);
	const { setUser } = useContext(UserContent);
	console.log(out);
	if(typeof out === 'string'){
		setUser([]);
		navigate("/");
	}
	
	const handleLogin = () => {
		const username = nameRef.current.value;
		const email = emailRef.current.value;
		if (!username || !email) {
			return window.alert("Please enter all input");
		}
		const some = account.find(
			(item) => item?.username === username && item?.email === email
		);
		if (!some) {
			return window.alert("Username or email is not correct");
		}
		setUser({ ...some });
		navigate("/");
	};
	return (
		<div className="login">
			<div className="login_form " style={{fontSize:'2rem'}}>
				<div className="login_title">Login System</div>
				<div className="login_input">
					<label>Username:</label>
					<input ref={nameRef} type="text" />
				</div>
				<div className="login_input">
					<label>email:</label>
					<input ref={emailRef} type="password" />
				</div>
				<div className="login_button">
					<button onClick={handleLogin}>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
