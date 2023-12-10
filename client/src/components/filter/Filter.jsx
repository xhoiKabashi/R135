import { useState } from "react";
import styles from "./Filter.module.css";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";

// eslint-disable-next-line react/prop-types
function Filter({ setFilter }) {
  const [priceUp, setPriceUp] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  function handleTimeUp() {
    setTimeUp(!timeUp);
    setFilter(timeUp);
  }
  function handlePriceUp() {
    setPriceUp(!priceUp);
  }

  return (
    <div className={styles.container}>
      <div>Filter:</div>
      {priceUp ? (
        <div onClick={handlePriceUp}>
          Price <HiArrowLongUp />
        </div>
      ) : (
        <div onClick={handlePriceUp}>
          Price <HiArrowLongDown />
        </div>
      )}
      {timeUp ? (
        <div onClick={handleTimeUp}>
          Time <HiArrowLongUp />
        </div>
      ) : (
        <div onClick={handleTimeUp}>
          Time <HiArrowLongDown />
        </div>
      )}
    </div>
  );
}

export default Filter;
