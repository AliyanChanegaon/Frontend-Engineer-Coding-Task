import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import LineGraph from "../components/graphs/line-graph";
import "leaflet/dist/leaflet.css";
import LeafletMap from "../components/maps/leaflet-map";
import { DropDown } from "../components/drop-down";

const ChartAndMapPage = () => {
  const [country, setCountry] = useState("india");
  const [options, setOptions] = useState([]);

  const getData = async () => {
    const response = await fetch(`https://disease.sh/v3/covid-19/countries`);
    const data = await response.json();
    return data;
  };

  const { data } = useQuery("countryData", getData);

  useEffect(() => {
    if (data) {
      setOptions(data.map((el: any) => el?.country || ""));
    }
  }, [data]);

  return (
    <div className="w-full p-3 overflow-hidden flex flex-col">
      <div className="w-2/5 self-end absolute top-3 right-[-80px]  sm:relative sm:right-0 sm:top-0 z-50  ">
        <DropDown options={options} setCountry={setCountry} country={country} />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row mb-4 p-3">
        <div className="mobile:w-full sm:w-4/6  h-[70vh] sm:h-6/7 border-2 p-4 bg-slate-400">
          <LeafletMap data={data} />
        </div>

        <div className=" flex gap-y-5   flex-col justify-between sm:w-1/3 mt-5 sm:mt-[-16px] p-4">
          <div className="w-fit">
            <LineGraph all={"all"} />
          </div>
          <div className="w-fit">
            <LineGraph country={country} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartAndMapPage;

// cases,deaths,recovered
