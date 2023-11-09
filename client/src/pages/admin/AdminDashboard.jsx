// AdminDashboard.js

import FlightForm from "./FlightForm";
import RouteForm from "./RouteForm";
import SeatForm from "./SeatForm";
// Import other form components as needed

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <FlightForm />
      <SeatForm />
      <RouteForm />
      {/* Include other form components here */}
    </div>
  );
}

export default AdminDashboard;
