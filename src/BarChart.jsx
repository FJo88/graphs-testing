import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

const BarChart = () => {

    Chart.register(...registerables);

    const state = {
        labels: [
            "January", "February", "March", "April", "May", "June"
        ],
        datasets: [
            {
            label: "Forecast",
            backgroundColor: "rgba(65, 172, 120, 1)",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 3,
            barThickness: 30,
            data: [400, 590, 560, 430, 450, 400]
            },
            {
                label: "Actual",
                backgroundColor: "grey",
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 3,
                barThickness: 30,
                data: [410, 570, 540, 400, 480, 410]
            },
            {
                label: "Test",
                backgroundColor: "lightblue",
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 3,
                barThickness: 30,
                data: [310, 470, 340, 500, 280, 310]
            }
        ]
    }
    const options =  {
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                text: "Forecast first half year",
                display: true,
                fontSize: 20
            }
        }
    }

  return (
    <div>
        <Bar data={state}
            options={options}>
        </Bar>
    </div>
  )
}

export default BarChart