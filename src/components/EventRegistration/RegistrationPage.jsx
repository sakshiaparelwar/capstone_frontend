import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    axios
      .get(`https://capstone-backend-fvj1.onrender.com/events/${id}`)
      .then((res) => {
        setEvent(res.data);
        console.log(res.data);
      })
      .catch((err) => alert("Error while fetching event details!!!"));
  }, [id]);

  const handleRegistration = () => {
    alert(`You have registered for event successfully!`);
  };

  return (
    <div>
      <h1>Event Registration</h1>
      {event ? (
        <div id="evnts">
          <h2>{event.title}</h2>
          <p>Date: {event.date.split("T")[0]}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <p>Category: {event.category}</p>
          <p>Description: {event.description}</p>
          <button onClick={handleRegistration}>Register for This event</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RegistrationPage;
