/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./SelectIndicator.module.css";

import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { VscPersonAdd } from "react-icons/vsc";
import useBusDataStore from "../../store/Store.jsx";
import { useState } from "react";

// ... (import statements remain the same)

export default function SelectIndicator({
  setDeparture,
  departure,
  setArrival,
  arrival,
  setNumberOfPassenger,
  numberOfPassenger,
}) {
  const { ticketDate, setTicketData } = useBusDataStore();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    setTicketData(selectedDate);
  };
  console.log(ticketDate);
  return (
    <>
      <div className={styles.cover}></div>
      <div className={styles.container}>
        <div className={styles.title}>Low cost bus travel from just €5</div>
        <div className={styles.datePicker}>
          <div>
            <div className={styles.input}>
              <div>
                <CiLocationOn />
              </div>
              <select
                id="departureSelect"
                name="departure"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className={styles.inputField}
                required
              >
                <option value="Tirana">Tirana</option>
                <option value="Pogradec">Pogradec</option>
                <option value="Korca">Korca</option>
                <option value="Elbasan">Elbasan</option>
              </select>
            </div>
            <div className={styles.input}>
              <div>
                <CiLocationOn />
              </div>
              <select
                id="arrivalSelect"
                name="arrival"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                className={styles.inputField}
                required
              >
                <option value="Pogradec">Pogradec</option>
                <option value="Tirana">Tirana</option>
                <option value="Korca">Korca</option>
                <option value="Elbasan">Elbasan</option>
              </select>
            </div>
          </div>
          <div>
            <div className={styles.input}>
              <div>
                <VscPersonAdd />
              </div>
              <select
                name="numberOfPassengers"
                value={numberOfPassenger}
                onChange={(e) => setNumberOfPassenger(e.target.value)}
                placeholder="Number of Passengers"
                className={styles.inputField}
                required
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className={styles.input}>
              <div>
                <CiCalendarDate />
              </div>
              <input
                type="date"
                name="selectedDate"
                value={ticketDate}
                min="2023-11-11"
                max="2024-12-31"
                onChange={(e) => handleDateChange(e)}
                className={styles.dateInput}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
