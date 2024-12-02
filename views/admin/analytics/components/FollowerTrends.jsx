import LineChart from "components/charts/LineChart";
import { axiosApi } from "config";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SelectPicker } from "rsuite";
// import { avgOverviewChartData, avgOverviewChartOption } from "variables/charts";

const FollowerTrends = () => {
  const periods = ["Weekly", "Monthly", "Yearly"].map((item) => ({
    label: item,
    value: item,
  }));

  const [duration, setDuration] = useState("Weekly");
  const [chartData, setChartData] = useState([]);
  const [chartOption, setChartOption] = useState(null);

  useEffect(() => {
    if (!duration) {
      toast.warn("Please select a period");
    } else {
      axiosApi
        .post("/api/user/analytic/trend", { duration })
        .then((res) => {
          // console.log(res.data.chartData)
          setChartData(res.data.chartData);
          const chartOptions = {
            legend: {
              show: false,
            },
          
            theme: {
              mode: "light",
            },
            chart: {
              toolbar: {
                show: false,
              },
            },
          
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 3
            },
          
            tooltip: {
              style: {
                fontSize: "12px",
                fontFamily: undefined,
                backgroundColor: "#000000",
              },
              theme: "dark",
            },
            grid: {
              show: true,
            },
            xaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: true,
                style: {
                  colors: "#A3AED0",
                  fontSize: "12px",
                  fontWeight: "500"
                },
              },
              type: "text",
              range: undefined,
              categories: res.data.categories,
              show: false,
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
          };
          setChartOption(chartOptions);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [duration]);

  return (
    <div className="flex w-full flex-col p-4">
      <div className="flex w-full items-center justify-between">
        <div className="text-lg font-bold">Follower Trends</div>
        <SelectPicker
          data={periods}
          searchable={false}
          style={{ width: 100 }}
          defaultValue="Weekly"
          placeholder="Period"
          onChange={(v) => setDuration(v)}
        />
      </div>
      <div className="min-h-[320px] w-full">
        <LineChart
          series={chartData}
          options={chartOption}
          classNames={`min-h-[300px] h-full`}
        />
      </div>
    </div>
  );
};

export default FollowerTrends;
