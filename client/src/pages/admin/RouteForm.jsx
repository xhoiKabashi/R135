import { useState } from "react";

function RouteForm() {
  const [origin, setOrigin] = useState("");
  const [arrival, setArrival] = useState("");
  const [flights, setFlights] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your Node.js backend
    const response = await fetch("/routes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ origin, arrival, flights }),
    });

    if (response.status === 201) {
      // Route was successfully created
      // You can display a success message or redirect to another page
    } else {
      // Handle errors
    }
  };

  return (
    <div>
      <h2>Add a Route</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="arrival">Arrival:</label>
          <input
            type="text"
            id="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="flights">Flights:</label>
          <input
            type="text"
            id="flights"
            value={flights}
            onChange={(e) => setFlights(e.target.value)}
          />
        </div>
        <button type="submit">Add Route</button>
      </form>
    </div>
  );
}

export default RouteForm;
