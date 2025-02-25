import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    })
      .then((Response) => {
        if(Response.data.status){
            navigate('/login')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign-Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <button type="Submit">Sign Up</button>
        <p>Have an Account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
