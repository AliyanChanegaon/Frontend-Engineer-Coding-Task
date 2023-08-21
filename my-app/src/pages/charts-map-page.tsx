import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LineGraph from "../components/graphs/line-graph";
import "leaflet/dist/leaflet.css";
import Map from "../components/maps/leaflet-map";
const ChartAndMapPage = () => {
  const [position] = useState<L.LatLngExpression>([51.505, -0.09]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    // Initialize map or handle any map-related actions here
  }, []);

  return (
    <div className="w-full h-screen">
      <div>Charts and Map</div>
          <div><Map/></div>
      <div className="flex justify-between w-full">
        <div>
          
        </div>
        <div>
          <button
            onClick={() => setCasesType("cases")}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Cases
          </button>
          <button
            onClick={() => setCasesType("deaths")}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Death
          </button>
          <button
            onClick={() => setCasesType("recovered")}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Recovered
          </button>
          <LineGraph casesType={casesType} />
        </div>
      </div>
    </div>
  );
};

export default ChartAndMapPage;

// cases,deaths,recovered
