
import { useLocation } from "react-router-dom";
import AsideBar from "./components/side-bar";
import AllRoutes from "./routes/all-routes";

function App() {
  const location = useLocation();

  const Heading: { [key: string]: string } = {
    contact: "Contact page",
    contactlist: "Userlist page",
    "carts-maps": "Charts and Maps Page",
  };

  const path = location.pathname.split("/").join("");

  return (
    <div>
      <nav className="w-full h-[60px] flex justify-center items-center p-2 bg-[#306893]">
        <p className="text-white text-2xl font-bold">
          {path.includes("contactid") ? "User page" : Heading[path]}
        </p>
      </nav>

      <div className="flex">
        <AsideBar />
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
