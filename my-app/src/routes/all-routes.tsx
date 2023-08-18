import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/main-page";
import ContactPage from "../pages/contact-page";
import ChartAndMapPage from "../pages/charts-map-page";



export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/carts-maps" element={<ChartAndMapPage />} />
    </Routes>
  );
}
