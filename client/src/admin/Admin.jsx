// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { Navigate } from "react-router-dom";
// import Cookies from "universal-cookie";
// import { AuthContext } from "../Context";
// import useBusDataStore from "../store/Store";
// import styles from "./Admin.module.css";

// import TicketCard from "../components/busCard/TicketCard";

// function Admin() {

//           const ticketResponse = await axios.get(
//             `http://localhost:3000/api/bookings/${ticketID}`
//           );

//   if (ticket !== null) {
//     // Display user data once retrieved
//     return (
//       <div className={styles.container}>
//         <div className={styles.hr}></div>
//         <div className={styles.menu}>
//           {ticket.map((ticket) => (
//             <div key={ticket._id}>
//               <TicketCard
//                 name={ticket.name}
//                 lastName={ticket.lastName}
//                 busFrom={ticket.from}
//                 busTo={ticket.to}
//                 date={ticket.date}
//                 busFromTime={ticket.fromTime}
//                 toTime={ticket.toTime}
//                 age={ticket.age}
//                 price={ticket.price}
//                 id={ticket._id.slice(0, 10)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // You can show a loading message while fetching data
// }

// export default Admin;
