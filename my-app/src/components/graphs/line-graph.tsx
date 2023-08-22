import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import { Chart } from "chart.js";
import { useQuery } from "react-query";
import "chartjs-adapter-moment";

Chart.register(require("chartjs-adapter-moment"), require("chart.js/auto"));

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

  const getCountryData = async () => {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/historical/${
        all ? "all" : country
      }?lastdays=120`
    );
    const data = await response.json();
    let chartData = buildChartData(all ? data : data?.timeline, casesType);
    setData(chartData);

    return data;
  };

  const { isLoading, isFetching, isRefetching, error } = useQuery(
    ["lineGraph", casesType, country],
    getCountryData
  );
  const isLoadingData = isLoading || isFetching || isRefetching;

  return (
    <div>
    <>
    {isLoadingData && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-[150px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}

      {error && !isLoadingData && (
        <div role="alert" className="h-[150px] mt-[10px]">
          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">
            Warning
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Something went wrong please select another country.</p>
          </div>
        </div>
      )}

      {!isLoadingData && !error && data.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgb(48,104,147,0.5)",
                borderColor: "rgb(48,104,147)",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </>
    </div>
  );
}

const LineGraph = ({ all, country }: { all?: string; country?: string }) => {
  const [casesType, setCasesType] = useState("cases");

  return (
    <div
      className="p-4 flex flex-col text-center "
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <p className="text-lg font-bold mb-2">
        {`${
          all
            ? "Worldwide"
            : country!.charAt(0).toUpperCase() + country!.slice(1)
        } Cases`}
      </p>
      <div className="ml-2 flex gap-5 ">
        {["Cases", "Deaths", "Recovered"].map((el) => (
          <button
            key={el}
            onClick={() => setCasesType(el.toLowerCase())}
            className={
              el.toLowerCase() == casesType
                ? "bg-[#306893]  text-white font-bold  px-4 rounded-full"
                : "border-2 border-[#306893] text-[#306893] font-bold  px-4 rounded-full"
            }
          >
            {el}
          </button>
        ))}
      </div>
      <Graph casesType={casesType} all={all} country={country} />
    </div>
  );
};

export default LineGraph;
