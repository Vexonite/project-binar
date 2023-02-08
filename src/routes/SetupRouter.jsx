import "../App.css";
import "../pages/pages.css";
import HomePage from "../pages/HomePage";
import CarDetail from "../pages/CarDetail";
import SearchCar from "../pages/SearchCar";
import CarPayment from "../pages/CarPayment";
import PayConfirm from "../pages/PayConfirm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp"

const SetupRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carimobil" element={<SearchCar />} />
        <Route path="/detailmobil/:id" element={<CarDetail />} />
        <Route path="/detailmobil/:id" element={<Footer />} />
        <Route path="/bayarmobil" element={<CarPayment />} />
        <Route path="/konfirmasibayar" element={<PayConfirm />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default SetupRouter;
