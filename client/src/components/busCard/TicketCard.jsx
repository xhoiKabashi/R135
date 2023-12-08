/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import styles from "./SelectedCard.module.css";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import useBusDataStore from "../../store/Store";
import QRCode from "react-qr-code";
import { CiCalendarDate, CiTimer, CiLocationOn, CiUser } from "react-icons/ci";
import { BsFiletypePdf } from "react-icons/bs";

import ReactToPrint from "react-to-print";

const TicketCard = ({
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
  fullID,
}) => {
  const { ticketDate, setTicketId } = useBusDataStore();
  console.log(typeof ticketDate);

  const componentRef = useRef();

  return (
    <div className={styles.card} ref={componentRef}>
      <div className={styles.cardHeader}>
        <div className={styles.qr}>
          <h4>Ticket Details</h4>
          <QRCode
            value={`https://asetapi.onrender.com/api/${fullID}`}
            size={60}
          />
        </div>
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
          <strong>Date:</strong> {date}
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
          <ReactToPrint
            trigger={() => (
              <button className={styles.pdf}>
                <BsFiletypePdf />
              </button>
            )}
            content={() => componentRef.current}
          />
        </p>
      </div>
    </div>
  );
};

export default TicketCard;
