import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useState } from "react";

function App() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
