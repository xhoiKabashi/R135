/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Stepper from "../../../components/stepper/Stepper";
import styles from "./PayTicket.module.css";
import useBusDataStore from "../../../store/Store";
import ExamplePaymentChannels from "../../../components/payment/PaymentShowOff";
import PaymentForm from "../../../components/payment/CheckOutPayment";
import BasicModal from "../../../components/modial/Modial";

function PayTicket() {
  const { activeStep, setActiveStep } = useBusDataStore();
  const [payMethod, setPayMethod] = useState("Cash");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Set activeStep to 2 when the component mounts or returns to the page
    if (activeStep !== 2) {
      setActiveStep(2);
    }
  }, [activeStep, setActiveStep]);

  const handlePaymentChannelChange = (selectedChannel) => {
    // Do something with the selected payment channel value
    setPayMethod(selectedChannel);
  };

  return (
    <div className={styles.container}>
      <Stepper />

      <div className={styles.card}>
        <ExamplePaymentChannels
          onPaymentChannelChange={handlePaymentChannelChange}
        />
        <div>
          <div>
            {payMethod === "Cash" && <h3>Pay directly to the bus Driver</h3>}
          </div>
          <div>{payMethod === "Credit Card" && <PaymentForm />}</div>
        </div>
        {payMethod === "Cash" && <div className={styles.img}></div>}
        <div>
          <div>
            {payMethod === "Cash" && (
              // eslint-disable-next-line no-unused-vars
              <button className={styles.button} onClick={(e) => setOpen(!open)}>
                Reserve ticket
              </button>
            )}
          </div>
          <div>
            {payMethod === "Credit Card" && (
              <button
                className={styles.button}
                onClick={(e) => setOpen(!open)}
                disabled
              >
                Pay and Reserve ticket
              </button>
            )}
          </div>
        </div>
      </div>
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default PayTicket;
