import Cookies from "universal-cookie";
import { AuthContext } from "../../Context";
import { useContext, useEffect } from "react";
import styles from "./About.module.css";
import { en, sq, it, de } from "./about.data";
import Lang from "../../Context";
import { v4 as uuidv4 } from "uuid";
import useBusDataStore from "../../store/Store";

const cookies = new Cookies();

function About() {
  const token = cookies.get("TOKEN");
  const { setUser } = useContext(AuthContext);
  const { data } = useContext(Lang);
  const busStore = useBusDataStore();
  const busData = busStore.busData;

  console.log(busData.length);

  let textdata;

  if (data === "eng") {
    textdata = en;
  } else if (data === "de") {
    textdata = de;
  } else if (data === "sq") {
    textdata = sq;
  } else if (data === "ita") {
    textdata = it;
  }

  useEffect(() => {
    if (token) {
      // Set the user as authenticated
      setUser(true);
    }
  }, [token, setUser]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageTop}></div>
        <div>
          {textdata.map((text) => (
            <div className={styles.section} key={uuidv4()}>
              <h3>{text.title}</h3>
              <p className={styles.missionText}>{text.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.image}></div>
      </div>
    </>
  );
}

export default About;
