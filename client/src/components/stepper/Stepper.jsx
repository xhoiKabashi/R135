import useBusDataStore from "../../store/Store.jsx";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StepButton from "@mui/joy/StepButton";
import StepIndicator from "@mui/joy/StepIndicator";
import Check from "@mui/icons-material/Check";

const steps = ["Destination", "Ticket", "Reserve"];

export default function ButtonStepper() {
  const activeStep = useBusDataStore((state) => state.activeStep);
  const setActiveStep = useBusDataStore((state) => state.setActiveStep);

  return (
    <Stepper sx={{ width: "99%" }}>
      {steps.map((step, index) => (
        <Step
          key={step}
          indicator={
            <StepIndicator
              variant={activeStep <= index ? "soft" : "solid"}
              color={activeStep < index ? "neutral" : "primary"}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
          }
          sx={{
            "&::after": {
              ...(activeStep > index &&
                index !== 2 && { bgcolor: "primary.solidBg" }),
            },
          }}
        >
          <StepButton onClick={() => setActiveStep(index + 1)}>
            {step}
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
}
