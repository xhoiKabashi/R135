import { useEffect, useContext, useState } from "react";
import Icon from "@mdi/react";
import { AuthContext } from "../../Context";
import Cookies from "universal-cookie";
import styles from "./HomePage.module.css";
import SelectIndicator from "../../components/selectIndicator/SelectIndicator";
import { mdiCarSearchOutline } from "@mdi/js";

const cookies = new Cookies();

function HomePage() {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [numberOfPassenger, setNumberOfPassenger] = useState("");
  const [date, setDate] = useState("12/23/2024");

  const token = cookies.get("TOKEN");
  const { setUser } = useContext(AuthContext);
  console.log(departure);
  console.log(arrival);
  console.log(date);
  console.log(numberOfPassenger);

  // prefents the logout in case the page get hard refreshd
  useEffect(() => {
    if (token) {
      setUser(true);
    }
  }, [token, setUser]);

  return (
    <>
      <div className={styles.container}>
        <div>
          <SelectIndicator
            setDeparture={setDeparture}
            departure={departure}
            setArrival={setArrival}
            arrival={arrival}
            setNumberOfPassenger={setNumberOfPassenger}
            numberOfPassenger={numberOfPassenger}
            date={date}
            setDate={setDate}
          />
        </div>
        <button className={styles.button}>
          <Icon path={mdiCarSearchOutline} size={1} />
          Search
        </button>
        <div className={styles.hr}></div>
      </div>
    </>
  );
}
export default HomePage;
