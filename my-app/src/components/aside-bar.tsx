

const AsideBar = () => {
  return (
    <aside className="w-full flex-1 border-r border-black" style={{height:"90vh"}}>
    <div className="text-lg font-semibold border-b border-black py-3 text-center cursor-pointer ">Contact</div>
    <div className="text-lg font-semibold border-b border-black py-3 text-center cursor-pointer ">Charts and Map</div>
   </aside>
  )
}

export default AsideBar;