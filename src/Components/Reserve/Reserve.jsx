import React, { useState } from "react";

export const BookingForm = () => {
  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    date: "",
    time: "",
    attendees: ""
  });

const [btnDisabled, setBtnDisabled] = useState(true);
const [message, setMessage] = useState("");

const initialState = {
  name: "",
  email: "",
  phonenumber: "",
  date: "",
  time: "",
  attendees: "",
};

const clearState = () => {
  setData({ ...initialState });
};

const handleInputChange = (event) => {
  if (data.name.length + 1 < 3) {
    setMessage("Name must be at least 3 characters");
    setBtnDisabled(true);
  } else {
    setMessage(null);
    setBtnDisabled(false);
  }
  setData({
    ...data,
    [event.target.name]: event.target.value,
  });
};
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("sending data..." + data.name + " " + data.email);
  clearState();
  setMessage("form completed sucessfuly");
};



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
      />

      <input
        type="phonenumber"
        placeholder="Phone Number"
        value={data.phonenumber}
        onChange={handleInputChange}
        name="phonenumber"
      />
      <input
        type="date"
        placeholder="Date/Month/Year"
        value={data.date}
        onChange={handleInputChange}
        name="date"
      />
      <input
        type="time"
        placeholder="Time"
        value={data.time}
        onChange={handleInputChange}
        name="time"
      />
      <input
        type="number"
        placeholder="Attendees"
        value={data.attendees}
        onChange={handleInputChange}
        name="attendees"
      />
      <button type="submit"disabled={btnDisabled}>Submit</button>
      {message}
    </form>
  );
}
export default BookingForm;