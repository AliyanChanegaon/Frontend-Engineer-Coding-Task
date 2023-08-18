import AsideBar from "../components/aside-bar";

const ChartAndMapPage = () => {
  return (
    <div className="h-screen">
    <nav className="w-full h-[60px] flex justify-center items-center p-2 bg-[#306893]"><p className="text-white text-2xl font-bold">Charts and Map Page</p></nav>
    
    <div className="flex border">
        <div style={{width:"230px"}} >
        <AsideBar />
        </div>
        <div>
              Charts and Map
        </div>
        
      </div>
    
    </div>
  )
}

export default ChartAndMapPage;