/* eslint-disable no-unused-vars */
// import Stepper from "../../components/stepper/Stepper";
import useBusDataStore from "../../store/Store";
import Stepper from "../../components/stepper/Stepper";
import styles from "./BookTicket.module.css";
import { useContext, useEffect, useState } from "react";
import SelectedBusCard from "../../components/busCard/SelectedCard";
import { AuthContext } from "../../Context";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

function BookTicket() {
  const { busSelection } = useBusDataStore();
  const { activeStep, setActiveStep } = useBusDataStore();
  const { userID } = useBusDataStore();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const from = busSelection.from;
  const to = busSelection.to;
  const date = busSelection.date;
  const fromTime = busSelection.fromTime;
  const toTime = busSelection.toTime;
  const price = busSelection.price;

  const token = cookies.get("TOKEN");
  const { setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:3000/api/bookings",
      data: {
        name,
        lastName,
        age,
        email,
        from,
        to,
        date,
        fromTime,
        toTime,
        price,
        userID,
      },
    };

    axios(configuration)
      .then((result) => {
        navigate("/pay-ticket");
      })
      .catch((error) => {
        error = new Error();
      });
  };
  //   use effect to add step on Stepper
  useEffect(() => {
    // Set activeStep to 1 when the component mounts or returns to the page
    if (activeStep !== 1) {
      setActiveStep(1);
    }
  }, [activeStep, setActiveStep]);

  return (
    <div className={styles.container}>
      <Stepper />
      <div className={styles.flexContainer}>
        <div className={styles.loginContainer}>
          <h3 className={styles.text}>Enter Your Details</h3>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.formGroup}>
              {/* <label>First Name</label> */}
              <input
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              {/* <label>Last Name</label> */}
              <input
                type="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              {/* <label>Email address</label> */}
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              {/* <label>Email address</label> */}
              <input
                type="tel"
                name="email"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
                required
              />
            </div>
            <div className={styles.formGroup}>
              {/* <label>Password</label> */}
            </div>
            <button>Proceed to Payment</button>
          </form>
        </div>
        <div>
          <SelectedBusCard
            busFrom={busSelection.from}
            busTo={busSelection.to}
            busDate={busSelection.date}
            busFromTime={busSelection.fromTime}
            busToTime={busSelection.toTime}
            busPrice={busSelection.price}
          />
        </div>
      </div>
    </div>
  );
}

export default BookTicket;
