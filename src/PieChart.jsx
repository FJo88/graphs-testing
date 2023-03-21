import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

const PieChart = () => {

    Chart.register(...registerables);

    const state = {
        labels: [
            "January", "February", "March", "April", "May", "June"
        ],
        datasets: [
            {
            label: "Forecast",
            backgroundColor: [
                "yellow",
                "green",
                "blue",
                "red",
                "purple",
                "brown"
            ],
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2,
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
                fontSize: 20
            }
        }
    }

  return (
    <div>
        <Pie data={state}
            options={options}>
        </Pie>
    </div>
  )
}

export default PieChart