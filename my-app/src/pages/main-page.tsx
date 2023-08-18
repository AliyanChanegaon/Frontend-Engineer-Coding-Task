import AsideBar from "../components/aside-bar";

const MainPage = () => {
  return (
    <div className="w-full h-screen">
      <nav className="w-full flex justify-center items-center p-2 bg-[#306893]">
        <p className="text-white text-2xl font-bold">Main Page</p>
      </nav>

      <div className="flex border">
        <div style={{width:"230px"}} >
        <AsideBar />
        </div>
        <div>
              Main
        </div>
        
      </div>
    </div>
  );
};

export default MainPage;
