/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";

export default function ExamplePaymentChannels({ onPaymentChannelChange }) {
  const [selectedPaymentChannel, setSelectedPaymentChannel] =
    React.useState("Cash");

  const handlePaymentChannelChange = (event) => {
    const newValue = event.target.value;
    setSelectedPaymentChannel(newValue);
    onPaymentChannelChange(newValue); // Pass the selected value to the parent component
  };

  return (
    <Box sx={{ maxWidth: 340 }}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
      <RadioGroup
        aria-labelledby="example-payment-channel-label"
        overlay
        name="example-payment-channel"
        value={selectedPaymentChannel}
        onChange={handlePaymentChannelChange}
      >
        <List
          component="div"
          variant="outlined"
          orientation="horizontal"
          sx={{
            borderRadius: "sm",
            boxShadow: "sm",
          }}
        >
          {["Credit Card", "Cash"].map((value, index) => (
            <React.Fragment key={value}>
              {index !== 0 && <ListDivider />}
              <ListItem sx={{ width: 170 }}>
                <Radio id={value} value={value} label={value} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </RadioGroup>
    </Box>
  );
}
