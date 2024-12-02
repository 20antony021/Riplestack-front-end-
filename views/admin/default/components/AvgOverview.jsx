import Card from "components/card";
import React, { useEffect, useState } from "react";
import AvgOverviewItem from "./AvgOverviewItem";

// import { avgOverviewChartData, avgOverviewChartOption } from "variables/charts";
import { axiosApi } from "config";

const AvgOverview = () => {
  const durationLists = [
    "1 Week",
    "2 Weeks",
    "1 Month",
    "3 Months",
    "6 Months",
    "1 Year",
  ];
  const [duration, setDuration] = useState("1 Week");
  const [avgImpression, setAvgImpression] = useState(null);
  const [avgEngagementRate, setAvgEngagementRate] = useState(null);
  const [avgReach, setAvgReach] = useState(null);
  const [categories, setCategories] = useState([]);

  const chartOption = {
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
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      type: "text",
      range: undefined,
      categories: [],
      show: false,
    },
  
    yaxis: {
      show: true,
      color: "black",
      labels: {
        show: false
      },
    },
  };

  const handleDuration = (d) => {
    setDuration(d);
  };

  useEffect(() => {
    // const period = duration === "All Time" ? "0all" : duration.replace(" ", "").toLowerCase();
    const period = duration.replace(" ", "").toLowerCase();

    axiosApi
      .post("/api/user/overview/avg", { duration: period })
      .then((res) => {
        const { avg_impression, avg_engagementRate, avg_reach, categories } =
          res.data;
        setAvgImpression(avg_impression);
        setAvgEngagementRate(avg_engagementRate);
        setAvgReach(avg_reach);
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [duration]);

  return (
    <Card extra="!p-[20px] text-center h-full bg-gradient-to-b from-[#ffffff] to-[#FDF7FF]">
      <div className="flex justify-between">
        <div className="text-lg font-bold dark:!text-navy-900">
          Average Overview
        </div>
        <div className="flex">
          {durationLists.map((item, id) => (
            <button
              key={`duration-button-${id}`}
              className={`${
                duration === item
                  ? "bg-[#FFBCAB] text-[#3B3A44]"
                  : "bg-[#F5F5F5] text-[#6D6B85]"
              } mr-2 rounded-full px-3`}
              onClick={() => handleDuration(item)}
            >
              {item}
            </button>
          ))}
          {/* <div className="ml-5">calendar</div> */}
        </div>
      </div>
      <div className="mt-5 flex w-full">
        {avgImpression && (
          <AvgOverviewItem
            key={`avg-impression-item`}
            classNames={`flex flex-col w-1/3 p-5`}
            last={false}
            title={`Avg Impression`}
            rise={avgImpression.rise}
            value={avgImpression.value}
            chartData={avgImpression.chartData}
            chartOption={{ ...chartOption, colors: [avgImpression.chartData[0].color], stroke: { curve: "smooth", width: 2, colors: [avgImpression.chartData[0].color] } }}
          />
        )}
        {avgEngagementRate && (
          <AvgOverviewItem
            key={`avg-engagement-item`}
            classNames={`flex flex-col w-1/3 p-5`}
            last={false}
            title={`Avg Engagement Rate`}
            rise={avgEngagementRate.rise}
            value={avgEngagementRate.value}
            chartData={avgEngagementRate.chartData}
            chartOption={{ ...chartOption, colors: [avgEngagementRate.chartData[0].color], stroke: { curve: "smooth", width: 2, colors: [avgEngagementRate.chartData[0].color] } }}
          />
        )}
        {avgReach && (
          <AvgOverviewItem
            key={`avg-reach-item`}
            classNames={`flex flex-col w-1/3 p-5`}
            last={true}
            title={`Avg Reach`}
            rise={avgReach.rise}
            value={avgReach.value}
            chartData={avgReach.chartData}
            chartOption={{ ...chartOption, colors: [avgReach.chartData[0].color], stroke: { curve: "smooth", width: 2, colors: [avgEngagementRate.chartData[0].color] } }}
          />
        )}
      </div>
    </Card>
  );
};

export default AvgOverview;
