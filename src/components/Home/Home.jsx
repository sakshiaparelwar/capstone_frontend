import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="container">
        <img
          src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          id="homeimg"
          alt="homeimg"
        />
      </div>
      <div id="bio">
        <h2>
          <i>Welcome to the Event Hub!</i>
        </h2>
        <p>
          Discover a world of excitement and entertainment with our diverse{" "}
          <br />
          range of events. From cultural gatherings to thrilling adventures,
          there's something for everyone. <br />
        </p>
        <p>Want to create your own event? Then click below</p>
        <Link to="/createevent" id="link">
          Create Event
        </Link>
      </div>
    </>
  );
};

export default Home;
