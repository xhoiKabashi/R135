/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./SelectedCard.module.css";

import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";

import {
  CiCalendarDate,
  CiTimer,
  CiLocationOn,
  CiUser,
  // GiPassport,
} from "react-icons/ci";

export default function TicketCard({
  name,
  lastName,
  busFrom,
  busTo,
  date,
  age,
  busFromTime,
  toTime,
  price,
  id,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4>Ticket Details</h4>
        <span className={styles.userDetails}>
          <p>
            <IoTicketOutline className={styles.padding} />
            ID:{id}
          </p>
        </span>

        <span className={styles.userDetails}>
          <p>
            <CiUser className={styles.padding} />
            {name} {lastName}
          </p>
          <p>Age: {age}</p>
        </span>
        <span className={styles.userDetails}>
          <MdOutlineAirlineSeatReclineNormal />
          <p>A2</p>
        </span>
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
          <strong>Date:</strong> 15/05/2022
        </p>
        <p>
          <CiTimer className={styles.padding} />
          <strong>Departure:</strong> {busFromTime}
        </p>
        <p>
          <CiTimer className={styles.padding} />
          <strong>Arrival:</strong> {toTime}
        </p>
      </div>
      <div className={styles.cardFooter}>
        <p className={styles.price} disabled>
          To be paid: {price} Lek
        </p>
      </div>
    </div>
  );
}
