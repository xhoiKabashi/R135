/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { AuthContext } from "../../Context";
import useBusDataStore from "../../store/Store";
import styles from "./MyBookings.module.css";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import TicketCard from "../../components/busCard/TicketCard";
import { apiURL } from "../../api";

const cookies = new Cookies();

function MyBookings() {
  const [userData, setUserData] = useState({
    id: null,
    data: null,
  });
  const { setUserID } = useBusDataStore();
  const [ticket, setTicket] = useState(null);

  const { setUser } = useContext(AuthContext);
  const token = cookies.get("TOKEN");

  // logout the user
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    setUser(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(`${apiURL}user-data`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = response.data;

          setUserData({ ...userData, id: userData._id, data: userData });
          setUserID(userData._id);
          setUser(true);

          const ticketResponse = await axios.get(
            `${apiURL}api/bookings?userID=${userData._id}`
          );
          const useTicket = ticketResponse.data;
          setTicket(useTicket.tickets);
        }
      } catch (error) {
        console.error("Error fetching user data or ticket data:", error);
      }
    };

    fetchData();
  }, [token]);

  if (!token) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  if (ticket !== null) {
    // Get the current date
    const currentDate = new Date().toISOString().split("T")[0];

    // Filter past tickets
    const pastTickets = ticket.filter((booking) => booking.date < currentDate);

    // Filter active tickets (future tickets)
    const activeTickets = ticket.filter(
      (booking) => booking.date >= currentDate
    );

    // Display user data once retrieved
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          {userData.data && (
            <h4 className={styles.title}>Hi, {userData.data.name}!</h4>
          )}
          <h2> My Profile</h2>
          <div className={styles.buttonDiv}>
            <button
              className={styles.button}
              type="submit"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.menu}>
          <Tabs aria-label="Basic tabs" defaultValue={0}>
            <TabList disableUnderline>
              <Tab color="primary">Active Bookings</Tab>
              <Tab color="primary">Past Bookings</Tab>
            </TabList>

            <TabPanel
              value={0}
              sx={{
                maxWidth: 300,
              }}
            >
              {ticket && ticket.length > 0 ? (
                activeTickets.map((booking) => (
                  <div key={booking._id}>
                    <TicketCard
                      name={booking.name}
                      lastName={booking.lastName}
                      busFrom={booking.from}
                      busTo={booking.to}
                      date={booking.date}
                      busFromTime={booking.fromTime}
                      toTime={booking.toTime}
                      age={booking.age}
                      price={booking.price}
                      id={booking._id.slice(0, 10)}
                      fullID={booking._id}
                    />
                  </div>
                ))
              ) : (
                <p>No active bookings</p>
              )}
            </TabPanel>
            <TabPanel
              value={1}
              sx={{
                width: 300,
              }}
            >
              {ticket && ticket.length > 0 ? (
                pastTickets.map((booking) => (
                  <div key={booking._id}>
                    <TicketCard
                      name={booking.name}
                      lastName={booking.lastName}
                      busFrom={booking.from}
                      busTo={booking.to}
                      date={booking.date}
                      busFromTime={booking.fromTime}
                      toTime={booking.toTime}
                      age={booking.age}
                      price={booking.price}
                      id={booking._id.slice(0, 10)}
                      fullID={booking._id}
                    />
                  </div>
                ))
              ) : (
                <p>No past bookings</p>
              )}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }

  // You can show a loading message while fetching data
}

export default MyBookings;
