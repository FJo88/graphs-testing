import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Button } from "@material-tailwind/react";

const DifferentCharts = () => {
  const [sixmonths, setSixmonths] = useState(true);
  const [year, setYear] = useState(false);
  const [twoyear, setTwoyear] = useState(false);

  Chart.register(...registerables);

  const state1 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Forecast",
        backgroundColor: "skyblue",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        pointRadius: 4,
        data: [400, 590, 560, 430, 450, 400],
      },
    ],
  };
  const state2 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Forecast",
        backgroundColor: "green",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        pointRadius: 4,
        data: [400, 590, 560, 430, 450, 400, 550, 630, 740, 700, 650, 666],
      },
    ],
  };
  const state3 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Forecast",
        backgroundColor: "red",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        pointRadius: 4,
        data: [400, 590, 560, 430, 450, 400, 550, 630, 740, 700, 650, 666,400, 590, 560, 430, 450, 400, 550, 630, 740, 700, 650, 666],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        text: "Forecast",
        display: true,
      },
    },
  };

  return (
    <div>
      {/* {sixmonths ? (
        <Line data={state1} options={options}></Line>
      ) : (
        <Line data={state2} options={options}></Line>
      )} */}
      {sixmonths ? <Line data={state1} options={options}></Line>: null}
      {year ? <Line data={state2} options={options}></Line>: null}
      {twoyear ? <Line data={state3} options={options}></Line>: null}

      <div className="flex w-max gap-20 align-middle p-3 ml-20">
        <Button
          onClick={() => {
            setSixmonths(true);
            setYear(false);
            setTwoyear(false);
          }}
          color="green"
        >
          6 Months
        </Button>
        <Button
          onClick={() => {
            setYear(true);
            setSixmonths(false);
            setTwoyear(false);
          }}
          color="green"
        >
          1 year
        </Button>
        <Button
          onClick={() => {
            setTwoyear(true);
            setSixmonths(false);
            setYear(false);
          }}
          color="green"
        >
          2 year
        </Button>
        
      </div>
    </div>
  );
};

export default DifferentCharts;
