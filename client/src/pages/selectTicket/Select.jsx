import { useEffect, useState } from "react";
import useBusDataStore from "../../store/Store";
import styles from "./Select.module.css";
import BusCard from "../../components/busCard/BusCard";
import { img } from "./SelectData";
import Stepper from "../../components/stepper/Stepper";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../../components/filter/Filter";

function BookingTicket() {
  const busStore = useBusDataStore();
  const setBusSelection = useBusDataStore();
  const { activeStep, setActiveStep } = useBusDataStore();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(true);
  // Set activeStep to 1 when the component mounts or returns to the page
  useEffect(() => {
    if (activeStep !== 0) {
      setActiveStep(0);
    }
  }, [activeStep, setActiveStep]);

  function handleNavigation() {
    navigate("/select");
  }

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

  // get ticket date
  const ticket = busStore.ticketDate;
  // get current date
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split("T")[0];
  // filter all tickets that are passed current time
  let filterTime = busStore.busData; // Start with all buses

  // filter all tickets that are passed current time
  if (ticket === currentDateString) {
    filterTime = filterTime.filter((bus) => {
      // Assuming bus.fromTime is in the format HH:mm
      const tickettime = bus.fromTime.split(":");
      const hour = Number(tickettime[0]);
      const currentTime = new Date();
      const currentHours = currentTime.getHours();
      return hour >= currentHours;
    });
  }

  // sort by time
  const sortedBusData = filterTime.sort((bus1, bus2) => {
    // Convert time strings to timestamps for comparison
    const bus1Timestamp = Date.parse(`01-01-2024 ${bus1.fromTime}`);
    const bus2Timestamp = Date.parse(`1-01-2024 ${bus2.fromTime}`);

    return filter
      ? bus1Timestamp - bus2Timestamp
      : bus2Timestamp - bus1Timestamp;
  });

  return (
    <div className={styles.container}>
      <Stepper />
      <Filter setFilter={setFilter} />
      <h2 className={styles.title}>Select Trip</h2>

      {sortedBusData.length > 0 ? (
        <div className={styles.cards}>
          {sortedBusData.map((bus) => (
            <div
              key={bus._id}
              onClick={() => {
                setBusSelection.setBusSelection(bus);
                handleNavigation();
                setActiveStep(1);
              }}
            >
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
      ) : (
        <>
          {" "}
          <p className={styles.para}>
            No available tickets for today, search new ticket on{" "}
            <Link className={styles.button} to="/home">
              Home Page
            </Link>
            .
          </p>
        </>
      )}

      <div className={styles.hr}></div>
    </div>
  );
}

export default BookingTicket;
