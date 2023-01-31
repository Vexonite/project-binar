import "./App.css";
import HomePage from "./pages/HomePage";
import CarDetail from "./pages/CarDetail";
import SearchCar from "./pages/SearchCar";
import CarPayment from "./pages/CarPayment";
import PayConfirm from "./pages/PayConfirm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carimobil" element={<SearchCar />} />
        <Route path="/detailmobil/:id" element={<CarDetail />} />
        <Route path="/detailmobil/:id" element={<Footer />} />
        <Route path="/bayarmobil" element={<CarPayment />} />
        <Route path="/konfirmasibayar" element={<PayConfirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
