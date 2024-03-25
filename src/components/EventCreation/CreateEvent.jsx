import React, { useState } from "react";
import "./event.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [location, setLocation] = useState();
  const [category, setCategory] = useState();

  let handlesubmit = (e) => {
    e.preventDefault();
    // console.log(title, description, date, time, location, category);
    const url = "https://capstone-backend-fvj1.onrender.com/events/createevent";
    const obj = { title, description, date, time, location, category };
    axios.post(url, obj).catch((err) => {
      console.log(err);
    });
    alert("Event created successfully");
  };

  return (
    <div id="event_creation">
      <h1 id="heading">Create New Event</h1>
      <form id="event_form" onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="date"
          name="date"
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="time"
          required
          placeholder="Time"
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Location"
          required
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="Category"
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />

        <input type="submit" id="create_event" placeholder="Create Event" />
      </form>
    </div>
  );
};

export default CreateEvent;
