import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Layout from "./pages/Layout";
import About from "./pages/about/About";
import MyBookings from "./pages/mybookings/MyBookings";
import LoginPage from "./pages/login/LoginPage";
import TermsAndConditions from "./pages/terms/TermsAndConditions";
import WhoAreWe from "./pages/whoarewe/WhoAreWe";
import WorkWithUs from "./pages/workWithUs/WorkWithUs";

import PageNotFound from "./pages/pagenotfound/PageNotFound";
import Privacy from "./pages/privacy/Privacy";

// Your component content

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Contains Navbar and footer */}
          <Route path="/" element={<Layout />}>
            {/* Home page will be the main page */}
            <Route index element={<HomePage />} />
            <Route path="mybookings" element={<MyBookings />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="termsandconditions" element={<TermsAndConditions />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="whoarewe" element={<WhoAreWe />} />
            <Route path="workwithus" element={<WorkWithUs />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

{
  /* <Layout>
  <HomePage />
</Layout> */
}
