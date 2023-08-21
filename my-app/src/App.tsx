import AsideBar from "./components/side-bar";
import AllRoutes from "./routes/all-routes";

function App() {
  return (
    <div>
      <nav className="w-full h-[60px] flex justify-center items-center p-2 bg-[#306893]">
        <p className="text-white text-2xl font-bold">Content Page</p>
      </nav>

      <div className="flex">
        <AsideBar />
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
