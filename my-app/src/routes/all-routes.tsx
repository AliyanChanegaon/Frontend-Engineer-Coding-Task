import { Routes, Route } from "react-router-dom";
import ContactPage from "../pages/contact-page";
import ChartAndMapPage from "../pages/charts-map-page";
import ContactList from "../pages/contact-list";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ContactPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact/id/:id" element={<ContactPage />} />
      <Route path="/contact-list" element={<ContactList />} />
      <Route path="/carts-maps" element={<ChartAndMapPage />} />
    </Routes>
  );
}
