import React from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const [password, setpassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/resetPassword/" + token, {
      password,
    })
      .then((Response) => {
        if (Response.data.status) {
          navigate("/login");
        }
        console.log(Response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>

        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          placeholder="*******"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default ResetPassword;
