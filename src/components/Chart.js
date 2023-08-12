import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambrigde",
          "New Bedford",
        ],
        datasets: [
          {
            label: "Population",
            data: [615673, 181045, 153566, 106591, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
export default Chart;
