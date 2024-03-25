import React, { useEffect, useState } from "react";
import "./eventss.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const EventPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://capstone-backend-fvj1.onrender.com/events")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert("Error while fetching data!!!"));
  }, []);

  const searchEvent = () => {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const filteredEvents = data.filter((event) =>
      event.title.toLowerCase().includes(searchInput)
    );
    setData(filteredEvents);

    if (filteredEvents.length === 0) {
      alert("No Event Found");
    }
  };
  return (
    <div id="event_container">
      <h1>Upcoming Events</h1>
      <div id="search_div">
        <input type="text" id="search" placeholder="Search Event..." />
        <button onClick={searchEvent} id="btn">
          Search
        </button>
      </div>
      <div>
        {data.map((dat, index) => (
          <div id="evnts" key={index}>
            <h2>{dat.title}</h2>
            <p>{dat.date.split("T")[0]}</p>
            <p>{dat.time}</p>
            <p>{dat.location}</p>
            <p>{dat.category}</p>
            <p>{dat.description}</p>
            <Link to={`/${dat._id}`}>
              <button>Register for This event</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
