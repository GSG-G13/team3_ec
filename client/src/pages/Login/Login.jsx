import "./login.css";
import { useEffect, useState } from "react";
import Social from "../../components/social/Social";
import InputField from "../../components/inputs/InputFiled";
import Overlay from "../../components/Overlay/Overlay.jsx";
import { useNavigate } from "react-router-dom";
import { fetctLogin, fetctSignUp } from "./fetchData";
const Login = () => {
	const [active, setActive] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [clicked, setClicked] = useState(false);
	const [clickSignUp, setClickSignUp] = useState(false)
	const [name, setName] = useState("");
	const useNavig = useNavigate();
	const handlerEmail = (e) => {
		setEmail(e.target.value);
	}

	const handlerPassword = (e) => {
		setPassword(e.target.value);
	}

		fetctLogin(email, password)
			.then(data => {
				console.log(data);
				if (data.status === 200) {
					useNavig('/')
				}
			})
	

	// useEffect(() => {

	// 	fetctSignUp(name, email, password)
	// 		.then(data => {
	// 			console.log(data);

	// 		})


	// }, [setClickSignUp])







	return (
		<>
			<div className={active ? "container  right-panel-active" : "container"} id="container">

				<div class="form-container sign-up-container">
					<div className="form">
						<h1 className="headerclass">Create Account</h1>
						<Social />
						<span>or use your email for registration</span>

						<input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
						<input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
						<input type="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

						<button className="btn" onClick={setClickSignUp}>Sign Up</button>
					</div>
				</div>

				<div class="form-container sign-in-container">
					<div className="form">
						<h1 className="headerclass">Sign in</h1>
						<Social />
						<span>or use your account</span>

						<input className="inputFiled" type="email" placeholder="Email" onChange={handlerEmail} />
						<input type="password" placeholder="password" onChange={handlerPassword} />

						<a href="#">Forgot your password?</a>
						<button className="btn" onClick={() => setClicked(!clicked)}>Sign In</button>
					</div>
				</div>
				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-panel overlay-left">
							<Overlay header_text="Welcome Back!" pText="To keep connected with us please login with your personal info" />
							<button class="ghost btn" id="signIn" onClick={() => setActive(false)}>Sign In</button>
						</div>
						<div class="overlay-panel overlay-right">
							<Overlay header_text="Hello, Friend!" pText="PLANToo" />
							<button class="ghost btn" id="signUp" onClick={() => setActive(true)}>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default Login;