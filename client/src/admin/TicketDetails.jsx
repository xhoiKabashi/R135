/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";

import TicketCard from "../components/busCard/TicketCard";

function TicketDetails({ match }) {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/tickets/${match.ticketId}`
        );

        setTicket(response.data);
      } catch (error) {
        console.error("Error fetching ticket details:", error);
      }
    };

    fetchTicketDetails();
  }, [match.ticketId]);

  if (!ticket) {
    // You can show a loading message here
    return null;
  }

  // Render your ticket details here
  return (
    <div>
      <h2>Ticket Details</h2>
      {/* Display ticket details based on the 'ticket' state */}
      {/* You can use the TicketCard component or customize it as needed */}
      <TicketCard
        name={ticket.name}
        lastName={ticket.lastName}
        busFrom={ticket.from}
        busTo={ticket.to}
        date={ticket.date}
        busFromTime={ticket.fromTime}
        toTime={ticket.toTime}
        age={ticket.age}
        price={ticket.price}
        id={ticket._id.slice(0, 10)}
      />
    </div>
  );
}

export default TicketDetails;
