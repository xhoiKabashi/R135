// RouteSelect.js

import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../../api";

function RouteList() {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState("");

  useEffect(() => {
    // Fetch available routes from the backend
    axios.get(`${apiURL}api/routes`).then((response) => {
      setRoutes(response.data);
    });
  }, []);

  return (
    <div>
      <label>Select a Route:</label>
      <select
        value={selectedRoute}
        onChange={(e) => setSelectedRoute(e.target.value)}
      >
        <option value="">Select a route</option>
        {routes.map((route) => (
          <option key={route._id} value={route._id}>
            {route.origin} to {route.destination}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RouteList;
