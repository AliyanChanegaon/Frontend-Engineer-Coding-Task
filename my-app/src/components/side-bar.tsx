import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const list = [
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Charts and Map",
    path: "/carts-maps",
  },
  {
    name: "All Contacts",
    path: "/contact-list",
  },
  {
    name: "Github",
    type: "https://github.com/AliyanChanegaon/Taiyo.AI-Frontend-Engineer-Coding-Task",
  },
  {
    name: "Portfolio",
    type: "https://aliyan-portfolio.vercel.app/",
  },
];

const SideBar = () => {

  return (
    <div className="w-full h-[70px] md:h-full md:w-[230px]">
      <aside className="w-full mt-4 sm:mt-0  flex gap-x-5 border-t sm:gap-x-4  flex-wrap sm:flex sm:flex-col sm:flex-1 justify-center md:justify-start md:h-[90vh] border-r border-slate-400">
        {list.map((el) => {
          return (
            <>
              {el.type ? (
                <div key={el.name} 
                className=
                "text-lg px-2 bg-slate-200 md:border- none font-semibold md:border-b border-slate-200 md:py-3 text-center cursor-pointer ">
                  <a  href={el.type} target="blank">
                    {el.name}
                  </a>
                </div>
              ) : (
                <NavLink
                to={el.path!}
                  key={el.name}
                  className={({ isActive }:{isActive:boolean}) =>
                   isActive ? "text-lg px-2 text-white bg-[#306893] md:border- none font-semibold md:border-b border-slate-200 md:py-3 text-center cursor-pointer" : "text-lg px-2 bg-slate-200 md:border- none font-semibold md:border-b border-slate-200 md:py-3 text-center cursor-pointer"
                }
                 
                
                >
                  {el.name}
                </NavLink>
              )}
            </>
          );
        })}
      </aside>
    </div>
  );
};

export default SideBar;
