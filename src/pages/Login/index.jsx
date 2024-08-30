import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { login } from "../../utils/API";

const Login = (props) => {
  const navigate = useNavigate();
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
  const [signupObj, setSignupObj] = useState({
    email: "",
    password: "",
    username: "",
  });
  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/");
    }
  }, [props.isLoggedIn]);

  const handleLoginChange = (e) => {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignupChange = (e) => {
    setSignupObj({
      ...signupObj,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginObj)
      .then((data) => {
        props.setUserData(data);
      })
      .catch((err) => {
        console.log("inside catch");
        console.log(err);
      });
  };

  return (
    <div className="Login">
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={loginObj.email}
          onChange={handleLoginChange}
        />
        <input
          type="password"
          name="password"
          value={loginObj.password}
          onChange={handleLoginChange}
        />
        <button>Login</button>
      </form>
      <br />
      <form className="signup-form">
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleSignupChange}
          value={signupObj.email}
        />
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleSignupChange}
          value={signupObj.username}
        />
        <input
          type="password"
          name="password"
          onChange={handleSignupChange}
          value={signupObj.password}
        />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Login;
