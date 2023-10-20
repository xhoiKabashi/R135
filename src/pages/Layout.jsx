/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./Layout.module.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// passsing props and sates using use contexts, in this case to change the language
import MyProvider from "../MyProvider";

function Layout() {
  // use effect and location are in order to rederect on top of the page after the navigation + to remeber last navigation
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={styles.container}>
      <MyProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </MyProvider>
      ,
    </div>
  );
}

export default Layout;
