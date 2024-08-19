import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { Legend } from "recharts";

class ApexChartBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "US Country Crisis",
          data: [{ x: 2, y: 135, z: 70 }],
        },
        {
          name: "Global Inflation Shock",
          data: [{ x: 3, y: 30, z: 36 }],
        },
        {
          name: "Growth Surprise",
          data: [{ x: 4, y: 352, z: 50 }],
        },
        {
          name: "Global Credit Crisis",
          data: [{ x: 5, y: -367, z: 30 }],
        },
        {
          name: "Commodity Collapse",
          data: [{ x: 6, y: -288, z: 35 }],
        },
        {
          name: "Global Policy Tightening",
          data: [{ x: 7, y: -273, z: 46 }],
        },
      ],
      options: {
        chart: {
          height: 250,
          type: "bubble",
          offsetX: 0,
        },
        dataLabels: {
          enabled: true,
        },
        fill: {
          type: "gradient",
        },
        title: {
          text: "",
        },
        xaxis: {
          type: "numeric",
          // tickAmount: 2,
          min: 0,
          max: 10,
          labels: {
            show: false,
            rotate: 0,
          },
        },
        yaxis: {
          max: 500,
          labels: {
            show: false,
          },
        },
        theme: {
          palette: "palette2",
        },
        legend: {
          show: true,
        },
        // dataLabels: {
        //   enabled: true,
        //   formatter: function (val, opts) {
        //     return (
        //       "SUB_RISK: " +
        //       opts.w.config.series[opts.seriesIndex].name +
        //       "\n AMOUNT: " +
        //       val +
        //       "M"
        //     );
        //   },
        //   dropShadow: {
        //     enabled: true,
        //   },
        //   // style: {
        //   //   colors: ["#999698"],
        //   // },
        // },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="">' +
              "<span> Sub_Risk: " +
              w.config.series[seriesIndex].name +
              "<span><br/>" +
              "<span> AMOUNT: " +
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
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bubble"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChartBubble;
