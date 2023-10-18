/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
