import { useState } from "react";
import styles from "./SelectIndicator.module.css";

export default function SelectIndicator({ setDeparture, setArrival }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [numberOfPassengers, setNumberOfPassengers] = useState(1);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handlePassengerChange = (e) => {
    setNumberOfPassengers(e.target.value);
  };
  return (
    <div className={styles.datePicker}>
      <div>
        <label htmlFor="departureSelect">Departure:</label>
        <select
          id="departureSelect"
          name="departure"
          onChange={(e) => setDeparture(e.target.value)}
          className={styles.inputField}
        >
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
      </div>

      <div>
        <label htmlFor="arrivalSelect">Arrival:</label>
        <select
          id="arrivalSelect"
          name="arrival"
          onChange={(e) => setArrival(e.target.value)}
          className={styles.inputField}
        >
          <option value="London">London</option>
          <option value="Paris">Paris</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      </div>
      <div>
        <label htmlFor="departureSelect">Passenger:</label>
        <select
          type="tel"
          name="numberOfPassengers"
          value={numberOfPassengers}
          onChange={handlePassengerChange}
          placeholder="Number of Passengers"
          className={styles.inputField} // Apply the CSS Modules class
        >
          <option value={1}>1</option>
          <option value={1}>2</option>
          <option value={1}>3</option>
          <option value={1}>4</option>
        </select>
      </div>
      <div>
        <label htmlFor="departureSelect">Date:</label>
        <input
          type="date"
          name="selectedDate"
          value={selectedDate}
          onChange={handleDateChange}
          placeholder="Date"
          className={styles.inputField} // Apply the CSS Modules class
        />
      </div>
    </div>
  );
}
