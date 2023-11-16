import { useEffect } from "react";
import useBusDataStore from "../../store/Store";
import styles from "./Select.module.css";
import BusCard from "../../components/busCard/BusCard";
import { img } from "./SelectData";
import Stepper from "../../components/stepper/Stepper";
import { useNavigate } from "react-router-dom";

function BookingTicket() {
  const busStore = useBusDataStore();
  const setBusSelection = useBusDataStore();
  const { activeStep, setActiveStep } = useBusDataStore();
  const navigate = useNavigate();

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

  return (
    <div className={styles.container}>
      <Stepper />
      <h2 className={styles.title}>Select Trip</h2>

      <div className={styles.cards}>
        {busStore.busData.map((bus) => (
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
      {/* <img src={img.pogradec} alt="" /> */}
      <div className={styles.hr}></div>
    </div>
  );
}

export default BookingTicket;
