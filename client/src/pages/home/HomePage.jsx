import { useEffect, useContext, useState } from "react";
import Icon from "@mdi/react";
import { AuthContext } from "../../Context";
import Cookies from "universal-cookie";
import styles from "./HomePage.module.css";
import SelectIndicator from "../../components/selectIndicator/SelectIndicator";
import { mdiCarSearchOutline } from "@mdi/js";
import MediaCard from "../../components/mediaCard/MediaCard.jsx";
import { en, sq, de, it } from "./home.data.js";
import Lang from "../../Context";
import axios from "axios";
import useBusDataStore from "../../store/Store.jsx";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

function HomePage() {
  const { data } = useContext(Lang);
  const [departure, setDeparture] = useState("Tirana");
  const [arrival, setArrival] = useState("Pogradec");
  const [numberOfPassenger, setNumberOfPassenger] = useState("");
  const [date, setDate] = useState("2023-12-30");
  const busStore = useBusDataStore();
  const navigate = useNavigate();

  const token = cookies.get("TOKEN");
  const { setUser } = useContext(AuthContext);

  let languageData;

  if (data === "ita") {
    languageData = it;
  } else if (data === "sq") {
    languageData = sq;
  } else if (data === "de") {
    languageData = de;
  } else {
    languageData = en;
  }

  // prefents the logout in case the page get hard refreshd
  useEffect(() => {
    if (token) {
      setUser(true);
    }
  }, [token, setUser, departure, arrival]);

  async function handleSearch(e) {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3000/api/routes?from=${departure}&to=${arrival}`
      );
      busStore.setBusData(response.data.routes);
    } catch (error) {
      console.error("Error while searching:", error);
    } finally {
      console.log("Completed");
      navigate("/select-ticket");
    }
  }

  return (
    <div className={styles.page}>
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
        <button className={styles.button} onClick={(e) => handleSearch(e)}>
          <Icon path={mdiCarSearchOutline} size={1} />
          Search
        </button>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.cards}>
        {languageData.map((datas) => (
          <MediaCard
            className={styles.mediaCard}
            key={datas.text}
            title={datas.title}
            text={datas.text}
            buttonText={datas.buttonText}
            image={datas.image}
          />
        ))}
      </div>
      <div className={styles.hr}></div>
    </div>
  );
}

export default HomePage;
