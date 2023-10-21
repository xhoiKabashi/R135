/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./LangDropDown.module.css";
import Lang from "../../Context";
import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { imgArray } from "./LangDropDownData";
function LangDropDown() {
  const [show, setshow] = useState(false);
  const { setData } = useContext(Lang);

  function handleFlagClick(flagValue) {
    if (flagValue.includes("it")) {
      setData("ita");
    } else if (flagValue.includes("de")) {
      setData("de");
    } else if (flagValue.includes("al")) {
      setData("sq");
    } else if (flagValue.includes("eng")) {
      setData("eng");
    }
    setshow(!show);
  }

  function handleShow() {
    setshow(!show);
    console.log("Managed");
  }
  return (
    <>
      <div className={styles.container}>
        {imgArray.map((flag, index) => (
          <div key={uuidv4()} style={{ display: !show ? "none" : "flex" }}>
            <img
              src={flag}
              key={uuidv4()}
              className={styles.flag}
              onClick={() => handleFlagClick(imgArray[index])}
            />
          </div>
        ))}

        <div style={{ display: show ? "none" : "flex" }}>
          <FontAwesomeIcon
            icon={faLanguage}
            flip
            size="xl"
            style={{
              color: "#rgb(0, 99, 190)",
            }}
            onClick={() => handleShow()}
            className={styles.icon}
          />
        </div>
      </div>
    </>
  );
}

export default LangDropDown;
