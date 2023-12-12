import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Badge from "@mui/material-next/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Notification() {
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(1);

  return (
    <React.Fragment>
      <Badge badgeContent={notify} color="info" onClick={() => setOpen(true)}>
        <MailIcon color="action" style={{ color: "white" }} />
      </Badge>
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
            width: 500,
            maxWidth: 300,

            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={2}
          >
            Notifications
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            {!notify ? (
              <>No notification</>
            ) : (
              <>
                <Link to="radio" onClick={() => setNotify(null)}>
                  Click here to Listen Music, Bon Voyage
                </Link>
              </>
            )}
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
