import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const url = "https://capstone-backend-fvj1.onrender.com/users/login";
    const obj = { name, phone, email, password };
    axios
      .post(url, obj)
      .then((res) => {
        alert("Login successfully");
        navigate("/home");
      })
      .catch((err) => {
        alert("Please enter your details correctly");
      });
    event.preventDefault();
  };
  return (
    <>
      <div id="signup">
        <h1 id="heading">Log In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phone">Contact</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </>
  );
}

export default LogIn;
