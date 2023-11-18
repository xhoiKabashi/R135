/* eslint-disable react/prop-types */
import * as React from "react";
import Snackbar from "@mui/joy/Snackbar";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";

export default function SnackBar({ open, setOpen }) {
  const navigate = useNavigate();

  function handleNavigationRegister() {
    navigate("/login");
  }
  function handleNavigationLogin() {
    navigate("/register");
  }

  return (
    <React.Fragment>
      <Snackbar
        autoHideDuration={5000}
        variant="solid"
        color="primary"
        size="lg"
        invertedColors
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={(theme) => ({
          background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
          maxWidth: 360,
        })}
      >
        <div>
          <Typography level="title-lg">Hey, Wait!!</Typography>
          <Typography sx={{ mt: 1, mb: 2 }}>
            Please Login or Create an Account
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              variant="solid"
              color="primary"
              onClick={() => handleNavigationRegister()}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleNavigationLogin()}
            >
              Create Account
            </Button>
          </Stack>
        </div>
      </Snackbar>
    </React.Fragment>
  );
}
