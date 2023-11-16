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
  busFrom,
  busTo,
  //   busDate,
  busFromTime,
  busToTime,
  busPrice,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4>Ticket Details</h4>
        <span className={styles.userDetails}>
          <p>
            <IoTicketOutline className={styles.padding} />
            ID:1114446
          </p>
        </span>

        <span className={styles.userDetails}>
          <p>
            <CiUser className={styles.padding} />
            Xhoi Kabashi
          </p>
          <p>Age: 35</p>
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
