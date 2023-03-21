import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

const CompetitionLine = () => {

    Chart.register(...registerables);

    const state = {
        labels: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
        ],
        datasets: [
            {
            label: "Cristoffer",
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: 2,
            pointRadius: 4,
            data: [830, 905, 860, 730, 550, 480, 650, 630, 580, 780, 950, 666]
            },
            {
                label: "Kimmo",
                backgroundColor: "yellow",
                borderColor: "orange",
                borderWidth: 2,
                pointRadius: 4,
                data: [740, 830, 1000, 600, 650, 690, 560, 550, 430, 250, 540, 610]
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
                text: "CC and KK Competition",
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

export default CompetitionLine