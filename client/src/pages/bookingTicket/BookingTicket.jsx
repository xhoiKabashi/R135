import { useState } from "react";
import useBusDataStore from "../../store/Store";
import styles from "./BookingTicket.module.css";
import BusCard from "../../components/busCard/BusCard";
import { img } from "./BookingTicketData";
import Stepper from "../../components/stepper/Stepper";

function BookingTicket() {
  const busStore = useBusDataStore();
  const [selectedBus, setSelectedBus] = useState(null);
  console.log(img);

  let image;

  if (busStore.busData[0].to === "Pogradec") {
    image = img.pogradec;
  } else if (busStore.busData[0].to === "Korca") {
    image = img.korca;
  } else if (busStore.busData[0].to === "Elbasan") {
    image = img.korca;
  } else if (busStore.busData[0].to === "Erseka") {
    image = img.korca;
  }
  //   console.log(busData);

  return (
    <div className={styles.container}>
      <Stepper />
      <div className={styles.cards}>
        {busStore.busData.map((bus) => (
          <div key={bus._id} onClick={() => setSelectedBus(bus)}>
            {/* Render the bus information here */}
            <BusCard
              busFrom={bus.from}
              busTo={bus.to}
              busDate={bus.date}
              busFromTime={bus.fromTime}
              busToTime={bus.toTime}
              busPrice={bus.price}
              busCovered={bus.covered}
              busImage={image}
            />
          </div>
        ))}
      </div>
      {/* <img src={img.pogradec} alt="" /> */}
      <div className={styles.hr}></div>

      {/* Render the details of the selected bus */}
      {selectedBus && (
        <div>
          <h2>Selected Bus Details</h2>
          <p>From: {selectedBus.from}</p>
          <p>To: {selectedBus.to}</p>
          {/* Include other details as needed */}
        </div>
      )}
    </div>
  );
}

export default BookingTicket;
