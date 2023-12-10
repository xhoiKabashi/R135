/* eslint-disable react/prop-types */
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import useBusDataStore from "../../store/Store";
import Typography from "@mui/joy/Typography";

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
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img src={busImage} srcSet={busImage} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">
          {busFrom} - {busTo}
        </Typography>
        <Typography
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay="true"
        >
          {ticketDate} Date
        </Typography>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {busPrice} Lek
        </Typography>
        <Typography level="body-sm">
          Departure: {busFromTime} - Arrival: {busToTime}
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" style={{ color: "white" }} size="lg">
          Select Bus ticket
        </Button>
      </CardOverflow>
    </Card>
  );
}
