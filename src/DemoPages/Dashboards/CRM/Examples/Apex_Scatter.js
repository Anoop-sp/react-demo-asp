import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexChartScatter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "TODAY",
          data: [
            { x: "IR", y: 27 },
            { x: "CR", y: 25 },
            { x: "FX", y: 3 },
            { x: "SCCY", y: 2 },
            { x: "XCCY", y: 15 },
            { x: "COM", y: 10 },
            { x: "CPI", y: 1 },
            { x: "EQD", y: 0 },
            { x: "EQDVOL", y: 0 },
          ],
        },
        {
          name: "YESTERDAY",
          data: [
            { x: "IR", y: 25 },
            { x: "CR", y: 25 },
            { x: "FX", y: 3 },
            { x: "SCCY", y: 2 },
            { x: "XCCY", y: 14 },
            { x: "COM", y: 10 },
            { x: "CPI", y: 1 },
            { x: "EQD", y: 0 },
            { x: "EQDVOL", y: 0 },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "scatter",
          zoom: {
            type: "xy",
          },
        },
        colors: ["#fc0303", "#001147"],
        dataLabels: {
          enabled: false,
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          type: "category",
          categories: [
            "IR",
            "CR",
            "FX",
            "SCCY",
            "XCCY",
            "COM",
            "CPI",
            "EQD",
            "EQDVOL",
          ],
        },
        yaxis: {},
        legend: {
          markers: {
            strokeWidth: [1, 3],
          },
        },
        markers: {
          shape: ["circle", "line"],
          size: 10,
          fillOpacity: 0.8,
          strokeColors: "#333",
          strokeWidth: [1, 3],
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            let var_type = seriesIndex == 0 ? "VaR-Today" : "Var Yesterday";
            return (
              '<div class="">' +
              "<span> Risk Type:" +
              w.config.series[seriesIndex].data[dataPointIndex].x +
              "<span><br/>" +
              "<span>" +
              var_type +
              ":" +
              series[seriesIndex][dataPointIndex] +
              "M </span></div>"
            );
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
          type="scatter"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChartScatter;
