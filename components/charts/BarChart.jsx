import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import _ from 'lodash';

const BarChart = ({ chart_data, chartOptions }) => {
  const [chartData, setChartData] = useState([]);
  const [chartOption, setChartOption] = useState(null);

  useEffect(() => {
    setChartData([...chart_data]);
    setChartOption(chartOptions);
  }, [chart_data, chartOptions]);

  console.log("traffic bar chart")
  console.log(chartData)

  return (
    <div className="w-full h-full">
      { chartOption && !_.isEqual(chartOption, {}) && <Chart
        options={{
          chart: {
            stacked: false,
            toolbar: {
              show: false,
            },
          },
          tooltip: {
            style: {
              fontSize: "12px",
              fontFamily: undefined,
              backgroundColor: "#000000"
            },
            theme: 'dark',
            onDatasetHover: {
              style: {
                fontSize: "12px",
                fontFamily: undefined,
              },
            },
          },
          xaxis: {
            categories: chartOption.xaxis.categories,
            show: false,
            labels: {
              show: true,
              style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
              },
            },
            axisBorder: {
              show: true,
            },
            axisTicks: {
              show: true,
            },
          },
          yaxis: {
            show: true,
            color: "black",
            labels: {
              show: true,
              style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500",
              },
            },
          },
        
          grid: {
            borderColor: "rgba(163, 174, 208, 0.3)",
            show: true,
            yaxis: {
              lines: {
                show: true,
                opacity: 0.5,
              },
            },
            row: {
              opacity: 0.5,
            },
            xaxis: {
              lines: {
                show: false,
              },
            },
          },
          fill: {
            type: "solid",
            colors: chartOption.fill.colors,
          },
          legend: {
            show: false,
          },
          colors: Array(chartOption.colors),
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              borderRadius: 0
            },
          },
        }}
        series={chartData}
        type="bar"
        width="100%"
        height="100%"
      />}
    </div>
  );
};

export default BarChart;
