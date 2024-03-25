import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let handleSubmit = (event) => {
    // console.log(name, phone, email, password);
    const url = "https://capstone-backend-fvj1.onrender.com/users/createuser";
    const obj = { name, phone, email, password };
    axios
      .post(url, obj)
      .then((res) => {
        // alert("Signed up successfully");
        // if (res.status === 200) {
        //   navigate("/login");
        // } else {
        //   Promise.reject();
        // }
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Signed up successfully");
    navigate("/login");

    event.preventDefault();
  };

  return (
    <div id="signup">
      <h1 id="heading">Sign Up</h1>
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
  );
}

export default Signup;
