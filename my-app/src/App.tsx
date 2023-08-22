import { Navbar } from "./components/navbar";
import AsideBar from "./components/side-bar";
import AllRoutes from "./routes/all-routes";

function App() {
  return (
    <div className="m-auto max-w-fit-screen">
      <Navbar />
      <div className="flex md:flex-row flex-col gap-3">
        <AsideBar />
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
