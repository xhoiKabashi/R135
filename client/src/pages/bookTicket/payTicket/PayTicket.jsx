import { useEffect, useState } from "react";
import Stepper from "../../../components/stepper/Stepper";
import styles from "./PayTicket.module.css";
import useBusDataStore from "../../../store/Store";
import ExamplePaymentChannels from "../../../components/payment/PaymentShowOff";
import PaymentForm from "../../../components/payment/CheckOutPayment";

function PayTicket() {
  const { activeStep, setActiveStep } = useBusDataStore();
  const [payMethod, setPayMethod] = useState("Cash");

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
      <ExamplePaymentChannels
        onPaymentChannelChange={handlePaymentChannelChange}
      />
      <div>
        <div>
          {payMethod === "Cash" && <h3>Pay Directly to the Bus Driver</h3>}
        </div>
        <div>{payMethod === "Credit Card" && <PaymentForm />}</div>
      </div>
    </div>
  );
}

export default PayTicket;
