import "./login.css";
import { useEffect, useState } from "react";
import Social from "../../components/social/Social";
import InputField from "../../components/inputs/InputFiled";
import Overlay from "../../components/Overlay/Overlay.jsx";
import { useNavigate } from "react-router-dom";
import { fetctLogin, fetctSignUp } from "./fetchData";

export const Login = () => {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [clicked, setClicked] = useState(false);

  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const useNavig = useNavigate();

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginClick = () => {
    fetctLogin(email, password).then((data) => {
      console.log(data);
      if (data.status === 200) {
        useNavig(`/`);
      }
    });
  };

  const signuoClick = () => {
    fetctSignUp(signupName, signupEmail, signupPassword).then((data) => {
      if (!data.error) {
        return useNavig("/");
      } else {
        return alert("Problem");
      }
    });
  };

  // useEffect(() => {

  // 	fetctSignUp(name, email, password)
  // 		.then(data => {
  // 			console.log(data);

  // 		})

  // }, [setClickSignUp])

  return (
    <>
      <div
        className={active ? "container  right-panel-active" : "container"}
        id="container"
      >
        <div class="form-container sign-up-container">
          <div className="form">
            <h1 className="headerclass">Create Account</h1>
            <Social />
            <span>or use your email for registration</span>

            <input
              type="text"
              placeholder="Name"
              className="inputFiled"
              onChange={(e) => setSignupName(e.target.value)}
            />
            <input
              type="email"
              className="inputFiled"
              placeholder="Email"
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <input
              type="Password"
              className="inputFiled"
              placeholder="Password"
              onChange={(e) => setSignupPassword(e.target.value)}
            />

            <button className="btn" onClick={signuoClick}>
              Sign Up
            </button>
          </div>
        </div>

        <div class="form-container sign-in-container">
          <div className="form">
            <h1 className="headerclass">Sign in</h1>
            <Social />
            <span>or use your account</span>

            <input
              className="inputFiled"
              type="email"
              placeholder="Email"
              onChange={handlerEmail}
            />
            <input
              className="inputFiled"
              type="password"
              placeholder="password"
              onChange={handlerPassword}
            />

            <a href="#">Forgot your password?</a>
            <button className="btn" onClick={() => loginClick()}>
              Sign In
            </button>
          </div>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <Overlay
                header_text="Welcome Back!"
                pText="To keep connected with us please login with your personal info"
              />
              <button
                class="ghost btn"
                id="signIn"
                onClick={() => setActive(false)}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <Overlay header_text="Hello, Friend!" pText="PLANToo" />
              <button
                class="ghost btn"
                id="signUp"
                onClick={() => setActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


