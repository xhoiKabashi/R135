import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../Context";
import Cookies from "universal-cookie";
import styles from "./HomePage.module.css";
import SelectIndicator from "../../components/selectIndicator/SelectIndicator";

const cookies = new Cookies();

function HomePage() {
  const [swap, setSwap] = useState(false);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [numberOfPassenger, setNumberOfPassenger] = useState("");
  const [date, setDate] = useState("");

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
            setArrival={setArrival}
          />
        </div>
        {/* <DatePicker
          setDate={setDate}
          setNumberOfPassenger={setNumberOfPassenger}
        /> */}
      </div>
    </>
  );
}
export default HomePage;
