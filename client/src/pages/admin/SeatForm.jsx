import { useState } from "react";

function SeatForm() {
  const [flight, setFlight] = useState("");
  const [seatNumber, setSeatNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to your Node.js backend
    const response = await fetch("/seats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ flight, seatNumber }),
    });

    if (response.status === 201) {
      // Seat was successfully created
      // You can display a success message or redirect to another page
    } else {
      // Handle errors
    }
  };

  return (
    <div>
      <h2>Add a Seat</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="flight">Flight:</label>
          <input
            type="text"
            id="flight"
            value={flight}
            onChange={(e) => setFlight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="seatNumber">Seat Number:</label>
          <input
            type="text"
            id="seatNumber"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
          />
        </div>
        <button type="submit">Add Seat</button>
      </form>
    </div>
  );
}

export default SeatForm;
