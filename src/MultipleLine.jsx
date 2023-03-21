import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const MultipleLine = () => {
  Chart.register(...registerables);

  const state = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Säästöpankki",
        backgroundColor: "blue",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        pointRadius: 10,
        pointStyle: "triangle",
        hoverRadius: 20,
        rotation: 180,
        data: [400, 590, 860, 430, 450, 800],
      },
      {
        label: "SSAB",
        backgroundColor: "red",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        pointRadius: 5,
        data: [740, 830, 700, 700, 600, 600],
      },
      {
        label: "Quintus",
        backgroundColor: "green",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 2,
        pointRadius: 7,
        pointStyle: "rectRounded",
        data: [60, 100, 135, 595, 90, 1150],
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
        text: "Forecast first half year",
        display: true,
        color: "purple",
      },
    },
  };

  return (
    <div>
      <Line data={state} options={options} id="multiple"></Line>
    </div>
  );
};

export default MultipleLine;
