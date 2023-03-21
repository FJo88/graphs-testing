import React from "react";
import { Button } from "@material-tailwind/react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useState } from "react";

const Modals = () => {
  Chart.register(...registerables);
  Chart.defaults.scales.linear.min = 0;

  const [open, setOpen] = useState(false);

  //   const openModal = () => {
  //     const modal = document.querySelector(".modal");
  //     modal.classList.remove("hidden");

  //   };
  //   const closeModal = () => {
  //     const modal = document.querySelector(".modal");
  //     modal.setAttribute("hidden", "hidden");
  //     setOpen(false);

  //   };

  const state1 = {
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
        backgroundColor: "yellow",
        borderColor: "blue",
        borderWidth: 2,
        pointRadius: 6,
        scaleStartValue : 0, 
        data: [400, 590, 560, 430, 450, 400, 550, 630, 740, 700, 650, 766],
      },
      {
        label: "Prognos",
        backgroundColor: "black",
        borderColor: "red",
        borderWidth: 2,
        pointRadius: 6,
        scaleStartValue : 0, 
        data: [430, 550, 360, 430, 550, 500, 750, 830, 640, 750, 470, 666],
      },
      {
        label: "Actual",
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 2,
        pointRadius: 6,
        scaleStartValue : 0, 
        data: [700, 350, 320, 230, 650, 460, 580, 600, 710, 400, 650, 543],
      },
      {
        label: "Income",
        backgroundColor: "purple",
        borderColor: "lightblue",
        borderWidth: 2,
        pointRadius: 6,
        scaleStartValue : 0, 
        data: [800, 350, 160, 430, 750, 900, 850, 230, 140, 300, 250, 166],
      }
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        text: "Filips Forecast",
        display: true,
      }
      
      
    },
  };

  return (
    <div className="flex gap-20 justify-center items-center">
      {!open ? (
        <Button
          className="showbutton"
          color="green"
          onClick={() => {
            setOpen(true);
          }}
        >
          Graph
        </Button>
      ) : (
        <div className=" items-center w-full justify-center bg-opacity-50 modal">
          <Line data={state1} options={options}  id="modal"></Line>
          <Button className="m-5" color="green" onClick={() => setOpen(false)}>
            Close Modal
          </Button>
        </div>
      )}

      {/* <div className=" items-center w-full justify-center bg-opacity-50 hidden modal">
        <Line data={state1} options={options}></Line>
        <Button className="m-5" color="green" onClick={() => setOpen(false)}>
          Close Modal
        </Button>
      </div> */}
    </div>
  );
};

export default Modals;
