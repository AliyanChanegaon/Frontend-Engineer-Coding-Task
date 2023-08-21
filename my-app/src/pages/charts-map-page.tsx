import { useState,useEffect } from "react";
import { Line } from 'react-chartjs-2';
import LineGraph from "../components/graphs/line-graph";





const ChartAndMapPage = () => {


  const [casesType, setCasesType] = useState("cases");
  return (
    <div className="h-screen">
      <div className="flex border">
        <div>Charts and Map</div>
         <LineGraph casesType={casesType}/> 
        {/* <Line options={options} data={data} />; */}
      </div>
    </div>
  );
};

export default ChartAndMapPage;

