import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { Chart } from "chart.js";
import "chartjs-adapter-moment"; // Import adapter for the "time" scale
import moment from "moment";

Chart.register(
  require("chartjs-adapter-moment"), // Register the "time" scale adapter
  require("chart.js/auto") // Register other scales and types
);
const options: any = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (context: any) {
          return numeral(context.parsed.y).format("+0,0");
        },
      },
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
        tooltipFormat: "ll",
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value: any, index: any, values: any) {
          return numeral(value).format("0a");
        },
      },
    },
  },
};

const buildChartData = (data: any, casesType = "cases") => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function Graph({
  casesType = "cases",
  all,
  country,
}: {
  casesType: string;
  all?: string;
  country?: string;
}) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://disease.sh/v3/covid-19/historical/${
            all ? "all" : country
          }?lastdays=120`
        );
        const data = await response.json();
      
        let chartData = buildChartData(all ? data : data?.timeline, casesType);
        setData(chartData);
      } catch (error) {
        console.log("Error fetching data:", error ,country
       , all);
      }
    };

    fetchData();
  }, [casesType, country]);

  return (
    <div>
      {data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

const LineGraph = ({ all, country }: { all?: string; country?: string }) => {
  const [casesType, setCasesType] = useState("cases");

  return (
    <div>
      <h1>
       
        {`${
          all
            ? "Worldwide"
            : country!.charAt(0).toUpperCase() + country!.slice(1)
        } Cases`}
      </h1>
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
      <Graph casesType={casesType} all={all} country={country} />
    </div>
  );
};

export default LineGraph;
