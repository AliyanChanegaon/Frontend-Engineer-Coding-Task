import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  const Heading: { [key: string]: string } = {
    "": "Weclome",
    contact: "Contact page",
    "contact-list": "Userlist page",
    "carts-maps": "Charts and Maps Page",
  };

  const path = location.pathname.split("/").join("");
  
  return (
    <nav className="w-full h-[60px] flex justify-left sm:justify-center items-center p-2 bg-[#306893]">
      <p className="text-white text-2xl font-bold ">
        {path.includes("contactid") ? "User page" : Heading[path]}
      </p>
    </nav>
  );
};
