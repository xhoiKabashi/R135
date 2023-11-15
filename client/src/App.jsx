import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./pages/layout/Layout";
import About from "./pages/about/About";
import MyBookings from "./pages/mybookings/MyBookings";
import LoginPage from "./pages/login/LoginPage";
import TermsAndConditions from "./pages/terms/TermsAndConditions";
import WhoAreWe from "./pages/whoarewe/WhoAreWe";
import WorkWithUs from "./pages/workWithUs/WorkWithUs";
import CreateAcc from "./pages/register/CreateAcc";
import PageNotFound from "./pages/pagenotfound/PageNotFound";
import Privacy from "./pages/privacy/Privacy";
import NeedHelp from "./pages/needHelp/NeedHelp";
import Radio from "./pages/radio/Radio";
import RouteList from "./pages/routeList/RouteList";
import Contact from "./pages/contact/Contact";
import BookingTicket from "./pages/bookingTicket/BookingTicket";

// Your component content

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Contains Navbar and footer */}
          <Route path="/" element={<Layout />}>
            {/* Home page will be the main page */}
            <Route index path="/" element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="home/booking" element={<BookingTicket />} /> 

            <Route path="routes" element={<RouteList />} />
            <Route path="mybookings" element={<MyBookings />} />
            <Route path="about" element={<About />} />
            <Route path="register" element={<CreateAcc />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="termsandconditions" element={<TermsAndConditions />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="whoarewe" element={<WhoAreWe />} />
            <Route path="workwithus" element={<WorkWithUs />} />
            <Route path="needhelp" element={<NeedHelp />} />
            <Route path="radio" element={<Radio />} />
            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
