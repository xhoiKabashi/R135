/* eslint-disable react/prop-types */

import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import useBusDataStore from "../../store/Store";

export default function BusCard({
  busFrom,
  busTo,
  busFromTime,
  busToTime,
  busPrice,
  busImage,
}) {
  const { ticketDate } = useBusDataStore();
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <AspectRatio flex ratio="1" hight={182} sx={{ minWidth: 232 }}>
          <img src={busImage} srcSet={busImage} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {busFrom} - {busTo}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Date: {ticketDate}
          </Typography>
          <Sheet
            sx={{
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Departure:
              </Typography>
              <Typography fontWeight="lg">{busFromTime} </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Arrival:
              </Typography>
              <Typography fontWeight="lg">{busToTime}</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Button variant="outlined" color="neutral" disabled>
              Cost: {busPrice} Lek
            </Button>
            <Button variant="solid" color="primary">
              Select
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
