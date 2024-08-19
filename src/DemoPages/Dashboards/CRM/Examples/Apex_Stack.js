import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Management Trigger",
          data: [100, 120, 150, 52, 13, 43, 32],
        },
        {
          name: "Management Limit",
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: "Board Limit",
          data: [12, 17, 11, 9, 15, 11, 20],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 0,
          colors: ["#fff"],
        },
        title: {
          text: "",
        },
        xaxis: {
          categories: [],
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        tooltip: {
          x: {
            show: false,
          },
          custom: function ({ val, series, seriesIndex, dataPointIndex, w }) {
            let percent = w.globals.seriesPercent[seriesIndex][dataPointIndex];
            return (
              "Business: CBA <br/> Limit Level:" +
              w.config.series[seriesIndex].name +
              "<br/>Limit value along Limit Level:" +
              series[seriesIndex][dataPointIndex] +
              "<br/>Var Limits:" +
              percent.toFixed(0) +
              "%"
            );
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          show: false,
          position: "bottom",
          horizontalAlign: "left",
          offsetX: 40,
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opt) {
            return Math.round(val);
          },
          dropShadow: {
            enabled: true,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
