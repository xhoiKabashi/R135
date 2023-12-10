/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";

import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useNavigate } from "react-router-dom";
import styles from "./Modial.module.css";

export default function BasicModal({ open, setOpen }) {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/mybookings");
  }

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 300,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h5"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={0}
            p={2}
          >
            Booking Successful
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <code>Please find the details on </code>
          </Typography>
          <Typography
            className={styles.modal}
            component="h4"
            id="modal-title"
            level="h5"
            textColor="inherit"
            fontWeight="lg"
            mb={2}
            alignItems="center"
          >
            <button
              className={styles.button}
              onClick={(e) => handleNavigation()}
            >
              My Booking Section.
            </button>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
