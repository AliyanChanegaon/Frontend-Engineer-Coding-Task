import { useEffect, useState, useMemo } from "react";

import LineGraph from "../components/graphs/line-graph";
import "leaflet/dist/leaflet.css";
import LeafletMap from "../components/maps/leaflet-map";
import { DropDown } from "../components/drop-down";

const ChartAndMapPage = () => {
  const [country, setCountry] = useState("india");
  const [data, SetData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`https://disease.sh/v3/covid-19/countries`);

      const res = await response.json();
      SetData(res);


    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const options = useMemo(() => {
    return data?.map((el: any) => el?.country || "");
  }, [country]);

  return (
    <div className="w-full p-3 overflow-hidden flex flex-col">
      <div className="w-2/5 self-end relative z-50">
        <DropDown options={options} setCountry={setCountry} country={country} />
      </div>
      <div className=" relative z-10 w-full h-full flex mb-4 p-3">
        <div className="w-3/4 h-6/7 border-2 p-4 bg-slate-400">
          <LeafletMap data={data} />
        </div>

        <div className="flex flex-col justify-between w-1/3 p-4">
          <div>
            <LineGraph all={"all"} />
          </div>
          <div>
            <LineGraph country={country} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartAndMapPage;

// cases,deaths,recovered
