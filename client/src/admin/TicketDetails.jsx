// TicketDetails.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./TicketDetails.module.css";
import { apiURL } from "../api";

function TicketDetails() {
  const { fullID } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const response = await axios.get(`${apiURL}${fullID}`);

        setTicket(response.data.booking);
      } catch (error) {
        console.error("Error fetching ticket details:", error);
      }
    };

    fetchTicketDetails();
  }, [fullID]);

  if (!ticket) {
    // You can show a loading message here
    return null;
  }

  // Render your ticket details using the CSS module classes
  return (
    <div className={styles.ticketDetailsContainer}>
      <h2 className={styles.ticketTitle}>Ticket Details</h2>
      <div className={styles.ticketCard}>
        <h1 className={styles.ticketInfo}> ID: {ticket._id}</h1>
        <h1 className={styles.ticketInfo}>Name: {ticket.name}</h1>
        <h1 className={styles.ticketInfo}>Last Name: {ticket.lastName}</h1>
        <h1 className={styles.ticketInfo}>From: {ticket.from}</h1>
        <h1 className={styles.ticketInfo}>Date: {ticket.date}</h1>
        <h1 className={styles.ticketInfo}>Departure: {ticket.fromTime}</h1>
        <h1 className={styles.ticketInfo}>Arrival: {ticket.toTime}</h1>
        <h1 className={styles.ticketInfo}>Age:{ticket.age}</h1>
        <h1 className={styles.ticketInfo}>To Pay: {ticket.price} Lek</h1>
      </div>
    </div>
  );
}

export default TicketDetails;
