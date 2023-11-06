/* eslint-disable react/prop-types */
import styles from "./Bus.module.css";

const Bus = ({ flight, onSelect }) => {
  return (
    <div className={styles.flight}>
      <p>Time: {flight.time}</p>
      <p>Available Seats: {flight.seats}</p>
      <button onClick={() => onSelect(flight)}>Select Flight</button>
    </div>
  );
};

export default Bus;
