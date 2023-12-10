/* eslint-disable react/prop-types */
import styles from "./SelectedCard.module.css";
import useBusDataStore from "../../store/Store";

import { CiCalendarDate, CiTimer, CiLocationOn } from "react-icons/ci";

export default function BusCard({
  busFrom,
  busTo,
  busFromTime,
  busToTime,
  busPrice,
}) {
  const { ticketDate } = useBusDataStore();

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4>Ticket Details</h4>
      </div>
      <div className={styles.cardContent}>
        <p>
          <CiLocationOn className={styles.padding} />
          <strong>Departure From:</strong> {busFrom}
        </p>
        <p>
          <CiLocationOn className={styles.padding} />
          <strong>Arrival To:</strong> {busTo}
        </p>
        <p>
          <CiCalendarDate className={styles.padding} />
          <strong>Date:</strong> {ticketDate}
        </p>
        <p>
          <CiTimer className={styles.padding} />
          <strong>Departure:</strong> {busFromTime}
        </p>
        <p>
          <CiTimer className={styles.padding} />
          <strong>Arrival:</strong> {busToTime}
        </p>
      </div>
      <div className={styles.cardFooter}>
        <h4 className={styles.price} disabled>
          Cost: {busPrice} Lek
        </h4>
      </div>
    </div>
  );
}
