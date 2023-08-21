import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const Navigate = useNavigate();
  return (
    <div style={{ width: "230px" }}>
      <aside
        className="w-full flex-1 border-r border-black"
        style={{ height: "90vh" }}
      >
        <div className="text-lg font-semibold border-b border-black py-3 text-center cursor-pointer " onClick={()=>Navigate("/contact")}>
          Contact
        </div>
        <div className="text-lg font-semibold border-b border-black py-3 text-center cursor-pointer " onClick={()=>Navigate("/carts-maps")}>
          Charts and Map
        </div>
        <div className="text-lg font-semibold border-b border-black py-3 text-center cursor-pointer " onClick={()=>Navigate("/contact/list")}>
          All Contacts
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
