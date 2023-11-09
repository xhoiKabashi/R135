// FlightForm.js
import  { useState } from "react";

function FlightForm() {
  const [route, setRoute] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your Node.js backend
    const response = await fetch("/flights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ route, time }),
    });

    if (response.status === 201) {
      // Flight was successfully created
      // You can display a success message or redirect to another page
    } else {
      // Handle errors
    }
  };

  return (
    <div>
      <h2>Add a Flight</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="route">Route:</label>
          <input
            type="text"
            id="route"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <button type="submit">Add Flight</button>
      </form>
    </div>
  );
}

export default FlightForm;
