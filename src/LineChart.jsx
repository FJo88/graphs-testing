import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

const LineChart = () => {

    Chart.register(...registerables);

    const state = {
        labels: [
            "January", "February", "March", "April", "May", "June"
        ],
        datasets: [
            {
            label: "Forecast",
            backgroundColor: "skyblue",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2,
            pointRadius: 8,
            data: [400, 590, 560, 430, 450, 400]
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
               
            }
        }
    }

  return (
    <div>
        <Line data={state}
            options={options}>
        </Line>
    </div>
  )
}

export default LineChart