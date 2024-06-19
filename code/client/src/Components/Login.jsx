import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    })
      .then((Response) => {
        if(Response.data.status){
            navigate('/')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password">Password:</label>
        <input
          type="Password"
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="Submit">Login</button>
        <Link to='/forgotPassword'>Forgot Password</Link>
        <p>Don't Have an Account? <Link to='/signup'>Sign up</Link></p>
      </form>
    </div>
  );
};

export default Login;
