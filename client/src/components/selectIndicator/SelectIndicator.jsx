/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./SelectIndicator.module.css";
import Icon from "@mdi/react";
import { mdiBusMarker, mdiCalendarRange, mdiAccountSupervisor } from "@mdi/js";

// ... (import statements remain the same)

export default function SelectIndicator({
  setDeparture,
  departure,
  setArrival,
  date,
  setDate,
  arrival,
  setNumberOfPassenger,
  numberOfPassenger,
}) {
  return (
    <>
      <div className={styles.cover}></div>
      <div className={styles.container}>
        <div className={styles.title}>Low cost bus travel from just €5</div>
        <div className={styles.datePicker}>
          <div>
            <div className={styles.input}>
              <div>
                <Icon path={mdiBusMarker} size={1} />
              </div>
              <select
                id="departureSelect"
                name="departure"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className={styles.inputField}
              >
                <option value="Tirana">Tirana</option>
                <option value="Pogradec">Pogradec</option>
                <option value="Korca">Korca</option>
              </select>
            </div>
            <div className={styles.input}>
              <div>
                <Icon path={mdiBusMarker} size={1} />
              </div>
              <select
                id="arrivalSelect"
                name="arrival"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                className={styles.inputField}
              >
                <option value="Pogradec">Pogradec</option>
                <option value="Tirana">Tirana</option>
                <option value="Korca">Korca</option>
              </select>
            </div>
          </div>
          <div>
            <div className={styles.input}>
              <div>
                <Icon path={mdiAccountSupervisor} size={1} />
              </div>
              <select
                name="numberOfPassengers"
                value={numberOfPassenger}
                onChange={(e) => setNumberOfPassenger(e.target.value)}
                placeholder="Number of Passengers"
                className={styles.inputField}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className={styles.input}>
              <div>
                <Icon path={mdiCalendarRange} size={1} />
              </div>
              <input
                type="date"
                name="selectedDate"
                value={date}
                min="2023-11-11"
                max="2024-12-31"
                onChange={(e) => setDate(e.target.value)}
                className={styles.dateInput}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
