/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { AuthContext } from "../../Context";
import useBusDataStore from "../../store/Store";

const cookies = new Cookies();

function MyBookings() {
  const [userData, setUserData] = useState(null);
  const { setUserID } = useBusDataStore();

  const { setUser } = useContext(AuthContext);
  const token = cookies.get("TOKEN");

  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    setUser(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get("http://localhost:3000/user-data", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = response.data;

          setUserData(userData);
          setUserID(userData._id);
          setUser(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [token]);

  if (!token) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  if (userData) {
    // Display user data once retrieved
    return (
      <div>
        <h1>Welcome, {userData.name}</h1>
        <h2>{userData.email}</h2>
        <h3>{userData.lastName}</h3>
        {/* Display other user data here */}
        <button type="submit" onClick={() => logout()}>
          Logout
        </button>
      </div>
    );
  }

  // You can show a loading message while fetching data
  return <div>Loading...</div>;
}

export default MyBookings;
