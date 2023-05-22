import "./login.css";
import { useEffect, useState } from "react";
import Social from "../../components/social/Social";
import InputField from "../../components/inputs/InputFiled";
import Overlay from "../../components/Overlay/Overlay.jsx";
const Login = () => {
	const [active, setActive] = useState(false);
	return (
		<>
			<div className={active ? "container  right-panel-active" : "container"} id="container">

				<div class="form-container sign-up-container">
					<div className="form">
						<h1 className="headerclass">Create Account</h1>
						<Social />
						<span>or use your email for registration</span>

						<InputField type="text" placeholder="Name" />
						<InputField type="email" placeholder="Email" />
						<InputField type="Password" placeholder="Password" />

						<button className="btn">Sign Up</button>
					</div>
				</div>

				<div class="form-container sign-in-container">
					<div className="form">
						<h1 className="headerclass">Sign in</h1>
						<Social />
						<span>or use your account</span>

						<InputField type="text" placeholder="Name" />
						<InputField type="email" placeholder="Email" />

						<a href="#">Forgot your password?</a>
						<button className="btn" >Sign In</button>
					</div>
				</div>
				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-panel overlay-left">
							<Overlay header_text="Welcome Back!" pText="To keep connected with us please login with your personal info"/>
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