import { useState, useEffect } from "react";
import Flight from "./Bus";
import styles from "./RouteList.module.css";

const RouteList = () => {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedFlights, setSelectedFlights] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/routes");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRoutes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
    setSelectedFlights([]);
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlights([...selectedFlights, flight]);
  };

  return (
    <div>
      <h1>Select a Route</h1>
      {routes.map((route) => (
        <div
          key={route._id}
          className={`${styles.route} ${
            selectedRoute && selectedRoute._id === route._id
              ? styles.selected
              : ""
          }`}
        >
          <p>Origin: {route.origin}</p>
          <p>Destination: {route.destination}</p>
          <button onClick={() => handleRouteSelect(route)}>Select Route</button>

          {selectedRoute && selectedRoute._id === route._id && (
            <div>
              <h2 className={styles.selectedFlights}>Select Flights</h2>
              {route.buses.map((flight) => (
                <Flight
                  key={flight._id}
                  flight={flight}
                  onSelect={handleFlightSelect}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      <h2 className={styles.selectedFlights}>Selected Flights</h2>
      <ul>
        {selectedFlights.map((flight, index) => (
          <li key={index}>
            Time: {flight.time}, Available Seats: {flight.seats}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteList;
